function shadeColor(color: string, percent: number): string {

    // Extract R, G, B values from the hex color
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    // Adjust R, G, B values by the percentage
    R = R * (100 + percent) / 100;
    G = G * (100 + percent) / 100;
    B = B * (100 + percent) / 100;

    // Clamp values between 0 and 255
    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    // Round the values
    R = Math.round(R);
    G = Math.round(G);
    B = Math.round(B);

    // Convert back to hex and format with leading zeroes if needed
    var RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

export { shadeColor };
