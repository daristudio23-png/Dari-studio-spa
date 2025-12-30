document.addEventListener("DOMContentLoaded", () => {
  console.log("Dari Studio Spa cargado correctamente");

  document.querySelectorAll(".whatsapp-link").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Click WhatsApp");
    });
  });

  document.querySelectorAll(".pagar-link").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Click Mercado Pago");
    });
  });
});
