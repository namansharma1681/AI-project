const deviceStatus = {
  light: false,
  fan: false,
  ac: false,
};

function toggleDevice(device) {
  deviceStatus[device] = !deviceStatus[device];
  document.getElementById(`${device}-status`).innerText = deviceStatus[device] ? "ON" : "OFF"

  const aiOutput = document.getElementById("ai-output");
  if (device === "light") {
    aiOutput.innerText = deviceStatus[device]
      ? "AI: It's dark, so I turned the light ON."
      : "AI: Enough light detected, turning OFF the light.";
  } else if (device === "fan") {
    aiOutput.innerText = deviceStatus[device]
      ? "AI: It's warm, turning ON the fan."
      : "AI: Temperature optimal, fan turned OFF.";
  } else if (device === "ac") {
    aiOutput.innerText = deviceStatus[device]
      ? "AI: Room is hot, AC turned ON."
      : "AI: Cooling complete, AC turned OFF.";
  }
}
