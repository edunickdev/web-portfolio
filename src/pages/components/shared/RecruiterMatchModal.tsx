import { useRef, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import {
  MotionDiv,
  AnimatePresence,
  fadeInUp,
  staggerContainer,
} from "../../../config/motion";
import { useRecruiterMatch } from "../../../stores/recruiterMatchStore";
import {
  GapStatus,
  GapItem,
} from "../../../data/interfaces/recruiterMatchTypes";
import RadarChart from "./RadarChart";
import {
  FiX,
  FiSend,
  FiCopy,
  FiCalendar,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
  FiArrowLeft,
  FiDownload,
} from "react-icons/fi";

const RecruiterMatchModal = () => {
  const {
    isModalOpen,
    jobDescription,
    analysis,
    isLoading,
    error,
    closeModal,
    setJobDescription,
    analyzeMatch,
    reset,
  } = useRecruiterMatch();

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (isModalOpen && textareaRef.current && !analysis) {
      setTimeout(() => textareaRef.current?.focus(), 300);
    }
  }, [isModalOpen, analysis]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleCopyReport = async () => {
    if (!analysis) return;
    const reportText = `Reporte de Compatibilidad — Eduard Nicolás Sarmiento Herrera

Score General: ${analysis.overallScore}%

${analysis.hiringManagerSummary}

Proyectos Relevantes:
${analysis.relevantProjects.map((p) => `• ${p.projectName}: ${p.relevance}`).join("\n")}

${analysis.recommendation}`;

    await navigator.clipboard.writeText(reportText);
  };

  const handleDownloadPDF = async () => {
    if (!resultsRef.current || !analysis) return;
    setIsDownloading(true);
    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const element = resultsRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: document.documentElement.classList.contains("dark")
          ? "#0a0a0f"
          : "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF("p", "mm", "a4");
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Match_Report_Eduard_Sarmiento_${analysis.overallScore}pct.pdf`);
    } catch (err) {
      console.error("Error generating PDF:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const getGapIcon = (status: GapStatus) => {
    switch (status) {
      case "green":
        return <FiCheckCircle className="text-emerald-500" size={20} />;
      case "yellow":
        return <FiAlertTriangle className="text-amber-500" size={20} />;
      case "red":
        return <FiXCircle className="text-red-500" size={20} />;
    }
  };

  const getGapBg = (status: GapStatus) => {
    switch (status) {
      case "green":
        return "bg-emerald-500/10 border-emerald-500/20";
      case "yellow":
        return "bg-amber-500/10 border-amber-500/20";
      case "red":
        return "bg-red-500/10 border-red-500/20";
    }
  };

  const handleBack = () => {
    reset();
    setTimeout(() => useRecruiterMatch.getState().openModal(), 50);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <MotionDiv
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto
              bg-white/95 dark:bg-bg-dark/95 backdrop-blur-xl
              rounded-3xl border border-black/10 dark:border-white/10
              shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full
                bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10
                text-text-primary dark:text-text-primary-dark transition-all duration-200"
            >
              <FiX size={20} />
            </button>

            {/* Content */}
            <div className="p-6 md:p-10">
              {!analysis && !isLoading ? (
                /* ===== INPUT STATE ===== */
                <MotionDiv
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Header */}
                  <MotionDiv variants={fadeInUp} className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 dark:bg-accent-dark/10 mb-4">
                      <span className="text-sm font-medium text-accent dark:text-accent-dark">
                        AI-Powered
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-3">
                      ¿Hacemos <span className="gradient-text">Match</span>?
                    </h2>
                    <p className="text-text-secondary dark:text-text-secondary-dark max-w-lg mx-auto">
                      Pega la descripción de tu vacante y mi IA analizará qué
                      tan compatible soy con lo que buscas. Sin login, sin
                      complicaciones.
                    </p>
                  </MotionDiv>

                  {/* Textarea */}
                  <MotionDiv variants={fadeInUp} className="mb-6">
                    <textarea
                      ref={textareaRef}
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Pega aquí la descripción de la vacante, los requisitos técnicos, las responsabilidades... todo lo que tengas."
                      className="w-full h-48 md:h-56 p-5 rounded-2xl resize-none
                        bg-white dark:bg-white/5
                        border-2 border-black/10 dark:border-white/10
                        focus:border-accent dark:focus:border-accent-dark
                        text-text-primary dark:text-text-primary-dark
                        placeholder:text-text-secondary/50 dark:placeholder:text-text-secondary-dark/50
                        outline-none transition-all duration-300
                        text-sm md:text-base leading-relaxed"
                    />
                  </MotionDiv>

                  {/* Error */}
                  {error && (
                    <MotionDiv
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center"
                    >
                      {error}
                    </MotionDiv>
                  )}

                  {/* CTA */}
                  <MotionDiv
                    variants={fadeInUp}
                    className="flex justify-center"
                  >
                    <Button
                      onPress={analyzeMatch}
                      isDisabled={!jobDescription.trim()}
                      className="btn-primary text-base md:text-lg px-8 py-6 flex items-center gap-3
                        disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <FiSend size={20} />
                      Analizar Compatibilidad
                    </Button>
                  </MotionDiv>

                  {/* Trust indicators */}
                  <MotionDiv
                    variants={fadeInUp}
                    className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-text-secondary dark:text-text-secondary-dark"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Sin almacenamiento de datos
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark" />
                      Análisis honesto con gaps reales
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      Powered by Gemini
                    </span>
                  </MotionDiv>
                </MotionDiv>
              ) : isLoading ? (
                /* ===== LOADING STATE ===== */
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full border-4 border-black/10 dark:border-white/10" />
                    <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-accent dark:border-t-accent-dark animate-spin" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-2">
                    Analizando compatibilidad...
                  </h3>
                  <p className="text-text-secondary dark:text-text-secondary-dark text-sm max-w-sm text-center">
                    Mi IA está cruzando tu vacante contra mi perfil técnico,
                    proyectos y certificaciones. Esto toma unos segundos.
                  </p>
                </div>
              ) : analysis ? (
                /* ===== RESULTS STATE ===== */
                <MotionDiv
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  ref={resultsRef}
                >
                  {/* Back button */}
                  <MotionDiv variants={fadeInUp} className="mb-6">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark
                        hover:text-accent dark:hover:text-accent-dark transition-colors"
                    >
                      <FiArrowLeft size={16} />
                      Analizar otra vacante
                    </button>
                  </MotionDiv>

                  {/* Score Header */}
                  <MotionDiv variants={fadeInUp} className="text-center mb-8">
                    <div
                      className="inline-flex items-center justify-center w-28 h-28 rounded-full
                      bg-gradient-to-br from-accent/20 to-accent-secondary/20
                      dark:from-accent-dark/20 dark:to-accent-purple/20
                      mb-4"
                    >
                      <span className="text-4xl font-bold gradient-text">
                        {analysis.overallScore}%
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-2">
                      {analysis.overallScore >= 80
                        ? "¡Excelente Match! 🎯"
                        : analysis.overallScore >= 60
                          ? "Buen Match 👍"
                          : "Match Parcial 🔍"}
                    </h2>
                    <p className="text-text-secondary dark:text-text-secondary-dark text-sm">
                      {analysis.recommendation}
                    </p>
                  </MotionDiv>

                  {/* Radar Chart */}
                  <MotionDiv variants={fadeInUp} className="mb-10">
                    <RadarChart axes={analysis.radarAxes} />
                  </MotionDiv>

                  {/* Gaps & Matches */}
                  <MotionDiv variants={fadeInUp} className="mb-10">
                    <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark mb-4">
                      Análisis Detallado
                    </h3>
                    <div className="space-y-3">
                      {analysis.gaps.map((gap: GapItem, i: number) => (
                        <div
                          key={i}
                          className={`p-4 rounded-2xl border ${getGapBg(gap.status)}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              {getGapIcon(gap.status)}
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-sm text-text-primary dark:text-text-primary-dark">
                                {gap.requirement}
                              </p>
                              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">
                                {gap.evidence}
                              </p>
                              {gap.suggestion && (
                                <p className="text-xs text-accent dark:text-accent-dark mt-2 italic">
                                  💡 {gap.suggestion}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </MotionDiv>

                  {/* Relevant Projects */}
                  {analysis.relevantProjects.length > 0 && (
                    <MotionDiv variants={fadeInUp} className="mb-10">
                      <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark mb-4">
                        Proyectos Relevantes para esta Vacante
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {analysis.relevantProjects.map((project, i) => (
                          <div key={i} className="glass-card p-4">
                            <p className="font-semibold text-sm text-accent dark:text-accent-dark mb-1">
                              {project.projectName}
                            </p>
                            <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
                              {project.relevance}
                            </p>
                          </div>
                        ))}
                      </div>
                    </MotionDiv>
                  )}

                  {/* Hiring Manager Summary */}
                  <MotionDiv variants={fadeInUp} className="mb-8">
                    <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark mb-4">
                      📋 Para tu Hiring Manager
                    </h3>
                    <div className="glass-card p-5">
                      <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed whitespace-pre-line">
                        {analysis.hiringManagerSummary}
                      </p>
                    </div>
                  </MotionDiv>

                  {/* CTAs */}
                  <MotionDiv
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Button
                      onPress={handleCopyReport}
                      className="btn-ghost flex items-center gap-2"
                    >
                      <FiCopy size={18} />
                      Copiar Reporte
                    </Button>
                    <Button
                      onPress={handleDownloadPDF}
                      isLoading={isDownloading}
                      className="btn-ghost flex items-center gap-2"
                    >
                      <FiDownload size={18} />
                      Descargar PDF
                    </Button>
                    <a
                      href="https://www.linkedin.com/in/eduard-nicolas-sarmiento-herrera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <FiCalendar size={18} />
                      Conectar en LinkedIn
                    </a>
                  </MotionDiv>
                </MotionDiv>
              ) : null}
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default RecruiterMatchModal;
