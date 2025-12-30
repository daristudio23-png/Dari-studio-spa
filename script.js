document.addEventListener("DOMContentLoaded", () => {
  console.log("Dari Studio Spa - sitio cargado correctamente");

  document.querySelectorAll(".whatsapp-link").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Click WhatsApp");
      // fbq('trackCustom', 'WhatsAppClick');
    });
  });

  document.querySelectorAll(".pagar-link").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Click Mercado Pago");
      // fbq('trackCustom', 'PagoKeratina');
    });
  });
});
