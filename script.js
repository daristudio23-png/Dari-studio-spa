document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-whatsapp, .icon-whatsapp").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Click WhatsApp");
      // fbq('trackCustom', 'WhatsAppClick');
    });
  });

  document.querySelectorAll(".pagar-link").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Click Compra Keratina");
      // fbq('trackCustom', 'CompraKeratina');
    });
  });
});
