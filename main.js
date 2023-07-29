const btn = document.getElementById("btn");
const colourLabel = document.getElementById("label");
const imageShow = document.getElementById("input");
btn.addEventListener("click", () => {
  const eyeDropper = new EyeDropper();
  eyeDropper
    .open()
    .then((result) => {
      const color = result.sRGBHex;
      copyToClipboard(color);
      label.innerText = color;
    })
    .catch((e) => {
      console.log("error:", e);
    });
});
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
