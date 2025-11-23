// src/components/Verify.jsx
import React, { useState } from "react";
import "../styles/verify.css";
import { VALID_CODES } from "../data/codes";
import { useI18n } from "../i18n";

export default function Verify() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const { t } = useI18n();

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalized = code.trim().toUpperCase();

    if (!normalized) {
      setStatus("idle");
      setMessage("");
      return;
    }

    if (VALID_CODES.includes(normalized)) {
      setStatus("ok");
      setMessage(t("verify.ok"));
    } else {
      setStatus("bad");
      setMessage(t("verify.bad"));
    }
  };

  return (
    <section id="verify" className="verify section-anim">
      <div className="verify-inner">

        <h2 className="verify-title">
          {t("verify.title")}
        </h2>

        <p className="verify-subtitle">
          {t("verify.subtitle")}
        </p>

        <form className="verify-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="verify-input"
            placeholder={t("verify.placeholder")}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button type="submit" className="verify-button">
            {t("verify.button")}
          </button>
        </form>

        {message && (
          <div
            className={`verify-result ${
              status === "ok"
                ? "verify-result-ok"
                : status === "bad"
                ? "verify-result-bad"
                : ""
            }`}
          >
            {message}
          </div>
        )}

        <p className="verify-hint">
          {t("verify.hint")}
        </p>
      </div>
    </section>
  );
}
