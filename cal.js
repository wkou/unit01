function onButtonClick() {
    "use strict";
    var a1 = parseFloat(document.frm1.A1.value),
        b = parseFloat(document.frm1.B.value),
        c = parseFloat(document.frm1.C.value),
        d1,
        e1,
        f1,
        g1,
        h = parseFloat(document.frm1.H.value),
        i = parseFloat(document.frm1.I.value),
        j1,
        s1,
        x1,
        a2 = parseFloat(document.frm1.A2.value),
        d2,
        e2,
        f2,
        g2,
        j2,
        s2,
        x2,
        a3 = parseFloat(document.frm1.A3.value),
        d3,
        e3,
        f3,
        g3,
        j3,
        s3,
        x3,
        a4 = parseFloat(document.frm1.A4.value),
        d4,
        e4,
        f4,
        g4,
        j4,
        s4,
        x4,
        a5 = parseFloat(document.frm1.A5.value),
        d5,
        e5,
        f5,
        g5,
        j5,
        s5,
        x5,
        a6 = parseFloat(document.frm1.A6.value),
        d6,
        e6,
        f6,
        g6,
        j6,
        s6,
        x6,
        a7 = parseFloat(document.frm1.A7.value),
        d7,
        e7,
        f7,
        g7,
        j7,
        s7,
        x7,
        a8 = parseFloat(document.frm1.A8.value),
        d8,
        e8,
        f8,
        g8,
        j8,
        s8,
        x8,
        a9 = parseFloat(document.frm1.A9.value),
        d9,
        e9,
        f9,
        g9,
        j9,
        s9,
        x9;

    if (document.frm1.D1.checked) {
        d1 = 1;
    } else {
        d1 = 0;
    }

    if (document.frm1.E1.checked) {
        e1 = 1;
    } else {
        e1 = 0;
    }

    if (document.frm1.F1.checked) {
        f1 = 1;
    } else {
        f1 = 0;
    }

    if (document.frm1.G1.checked) {
        g1 = 1;
    } else {
        g1 = 0;
    }

    if (document.frm1.J1.checked) {
        j1 = 1;
    } else {
        j1 = 0;
    }

    s1 = a1 + Math.ceil(a1 * 0.024) * b + Math.ceil(a1 * 0.018) * c + Math.ceil(a1 * 0.16) * d1 + Math.ceil(a1 * 0.1) * e1 + 450 * f1 + 200 * g1;
    x1 = s1 + Math.ceil(s1 * h * 0.01) + Math.ceil(s1 * i * 0.01) * j1;

    if (document.frm1.D2.checked) {
        d2 = 1;
    } else {
        d2 = 0;
    }

    if (document.frm1.E2.checked) {
        e2 = 1;
    } else {
        e2 = 0;
    }

    if (document.frm1.F2.checked) {
        f2 = 1;
    } else {
        f2 = 0;
    }

    if (document.frm1.G2.checked) {
        g2 = 1;
    } else {
        g2 = 0;
    }

    if (document.frm1.J2.checked) {
        j2 = 1;
    } else {
        j2 = 0;
    }

    s2 = a2 + Math.ceil(a2 * 0.024) * b + Math.ceil(a2 * 0.018) * c + Math.ceil(a2 * 0.16) * d2 + Math.ceil(a2 * 0.1) * e2 + 450 * f2 + 200 * g2;
    x2 = s2 + Math.ceil(s2 * h * 0.01) + Math.ceil(s2 * i * 0.01) * j2;


    if (document.frm1.D3.checked) {
        d3 = 1;
    } else {
        d3 = 0;
    }

    if (document.frm1.E3.checked) {
        e3 = 1;
    } else {
        e3 = 0;
    }

    if (document.frm1.F3.checked) {
        f3 = 1;
    } else {
        f3 = 0;
    }

    if (document.frm1.G3.checked) {
        g3 = 1;
    } else {
        g3 = 0;
    }

    if (document.frm1.J3.checked) {
        j3 = 1;
    } else {
        j3 = 0;
    }

    s3 = a3 + Math.ceil(a3 * 0.024) * b + Math.ceil(a3 * 0.018) * c + Math.ceil(a3 * 0.16) * d3 + Math.ceil(a3 * 0.1) * e3 + 450 * f3 + 200 * g3;
    x3 = s3 + Math.ceil(s3 * h * 0.01) + Math.ceil(s3 * i * 0.01) * j3;

    if (document.frm1.D4.checked) {
        d4 = 1;
    } else {
        d4 = 0;
    }

    if (document.frm1.E4.checked) {
        e4 = 1;
    } else {
        e4 = 0;
    }

    if (document.frm1.F4.checked) {
        f4 = 1;
    } else {
        f4 = 0;
    }

    if (document.frm1.G4.checked) {
        g4 = 1;
    } else {
        g4 = 0;
    }

    if (document.frm1.J4.checked) {
        j4 = 1;
    } else {
        j4 = 0;
    }

    s4 = a4 + Math.ceil(a4 * 0.024) * b + Math.ceil(a4 * 0.018) * c + Math.ceil(a4 * 0.16) * d4 + Math.ceil(a4 * 0.1) * e4 + 450 * f4 + 200 * g4;
    x4 = s4 + Math.ceil(s4 * h * 0.01) + Math.ceil(s4 * i * 0.01) * j4;

    if (document.frm1.D5.checked) {
        d5 = 1;
    } else {
        d5 = 0;
    }

    if (document.frm1.E5.checked) {
        e5 = 1;
    } else {
        e5 = 0;
    }

    if (document.frm1.F5.checked) {
        f5 = 1;
    } else {
        f5 = 0;
    }

    if (document.frm1.G5.checked) {
        g5 = 1;
    } else {
        g5 = 0;
    }

    if (document.frm1.J5.checked) {
        j5 = 1;
    } else {
        j5 = 0;
    }

    s5 = a5 + Math.ceil(a5 * 0.024) * b + Math.ceil(a5 * 0.018) * c + Math.ceil(a5 * 0.16) * d5 + Math.ceil(a5 * 0.1) * e5 + 450 * f5 + 200 * g5;
    x5 = s5 + Math.ceil(s5 * h * 0.01) + Math.ceil(s5 * i * 0.01) * j5;

    if (document.frm1.D6.checked) {
        d6 = 1;
    } else {
        d6 = 0;
    }

    if (document.frm1.E6.checked) {
        e6 = 1;
    } else {
        e6 = 0;
    }

    if (document.frm1.F6.checked) {
        f6 = 1;
    } else {
        f6 = 0;
    }

    if (document.frm1.G6.checked) {
        g6 = 1;
    } else {
        g6 = 0;
    }

    if (document.frm1.J6.checked) {
        j6 = 1;
    } else {
        j6 = 0;
    }

    s6 = a6 + Math.ceil(a6 * 0.024) * b + Math.ceil(a6 * 0.018) * c + Math.ceil(a6 * 0.16) * d6 + Math.ceil(a6 * 0.1) * e6 + 450 * f6 + 200 * g6;
    x6 = s6 + Math.ceil(s6 * h * 0.01) + Math.ceil(s6 * i * 0.01) * j6;

    if (document.frm1.D7.checked) {
        d7 = 1;
    } else {
        d7 = 0;
    }

    if (document.frm1.E7.checked) {
        e7 = 1;
    } else {
        e7 = 0;
    }

    if (document.frm1.F7.checked) {
        f7 = 1;
    } else {
        f7 = 0;
    }

    if (document.frm1.G7.checked) {
        g7 = 1;
    } else {
        g7 = 0;
    }

    if (document.frm1.J7.checked) {
        j7 = 1;
    } else {
        j7 = 0;
    }

    s7 = a7 + Math.ceil(a7 * 0.024) * b + Math.ceil(a7 * 0.018) * c + Math.ceil(a7 * 0.16) * d7 + Math.ceil(a7 * 0.1) * e7 + 450 * f7 + 200 * g7;
    x7 = s7 + Math.ceil(s7 * h * 0.01) + Math.ceil(s7 * i * 0.01) * j7;

    if (document.frm1.D8.checked) {
        d8 = 1;
    } else {
        d8 = 0;
    }

    if (document.frm1.E8.checked) {
        e8 = 1;
    } else {
        e8 = 0;
    }

    if (document.frm1.F8.checked) {
        f8 = 1;
    } else {
        f8 = 0;
    }

    if (document.frm1.G8.checked) {
        g8 = 1;
    } else {
        g8 = 0;
    }

    if (document.frm1.J8.checked) {
        j8 = 1;
    } else {
        j8 = 0;
    }

    s8 = a8 + Math.ceil(a8 * 0.024) * b + Math.ceil(a8 * 0.018) * c + Math.ceil(a8 * 0.16) * d8 + Math.ceil(a8 * 0.1) * e8 + 450 * f8 + 200 * g8;
    x8 = s8 + Math.ceil(s8 * h * 0.01) + Math.ceil(s8 * i * 0.01) * j8;

    if (document.frm1.D9.checked) {
        d9 = 1;
    } else {
        d9 = 0;
    }

    if (document.frm1.E9.checked) {
        e9 = 1;
    } else {
        e9 = 0;
    }

    if (document.frm1.F9.checked) {
        f9 = 1;
    } else {
        f9 = 0;
    }

    if (document.frm1.G9.checked) {
        g9 = 1;
    } else {
        g9 = 0;
    }

    if (document.frm1.J9.checked) {
        j9 = 1;
    } else {
        j9 = 0;
    }

    s9 = a9 + Math.ceil(a9 * 0.024) * b + Math.ceil(a9 * 0.018) * c + Math.ceil(a9 * 0.16) * d9 + Math.ceil(a9 * 0.1) * e9 + 450 * f9 + 200 * g9;
    x9 = s9 + Math.ceil(s9 * h * 0.01) + Math.ceil(s9 * i * 0.01) * j9;


    document.frm2.Y.value = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9;
}