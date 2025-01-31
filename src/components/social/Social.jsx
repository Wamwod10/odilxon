import React from "react";
import { FaInstagram, FaYoutube, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import "./social.scss";

const Social = () => {
  const socialData = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/odilxonuz/profilecard/?igsh=MXZ5d2Z5ejl",
      followers: "700 000+ Obunachi",
      color: "#E1306C",
      bg: "linear-gradient(135deg, #F77737, #E1306C, #C13584)",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      followers: "Soon...",
      color: "#FF0000",
      bg: "linear-gradient(135deg, #FF0000, #D00000)",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: "https://t.me/odilxonuzb",
      followers: "65 000+ Obunachi",
      color: "#0088cc",
      bg: "linear-gradient(135deg, #30A3E6, #0088cc)",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@odilxon_kamolov",
      followers: "700 000+ Obunachi",
      color: "#000",
      bg: "linear-gradient(135deg, #69C9D0, #EE1D52, #000)",
    },
  ];

  return (
    <div id="social" className="social-container container">
      <h2>Odilxon Kamolovni Kuzatib Boring</h2>
      <div className="social-links">
        {socialData.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="social-card" style={{ background: item.bg }}>
            <div className="social-icon" style={{ color: item.color }}>{item.icon}</div>
            <div className="social-info">
              <span className="social-name">{item.name}</span>
              <span className="social-followers">{item.followers} </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
