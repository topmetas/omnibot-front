export function applyBranding(branding) {
    if (!branding) return;
  
    document.documentElement.style.setProperty(
      "--primary",
      branding.primaryColor
    );
  
    if (branding.logoUrl) {
      document.getElementById("logo").src = branding.logoUrl;
    }
  }
  
  