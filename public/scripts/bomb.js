function createWorld(count) {
    const ctnBomb = document.querySelector("#bomb");
    ctnBomb.innerHTML = earthAscii[count].frame;
  }

const earthAscii = [
    {
        frame: `
        _______________________________BFx______
        ______________________________L!sB______
        _______________________B%zu_G/_&))))Z___
        _____________________s!re$B__B/wB_______
        ___________________B=rB_______Be!rg_____
        ___________________i"____________BB_____
        _________________r!;;!!B________________
        _______________Qm.G__P.Z________________
        ____________O/:(jO____WY!;jB____________
        __________N=;O___________Bn_u___________
        _________F_P_______________B;!B_________
        ________E.P__________________:*_________
        ________r,___________________h.B________
        ________;!___________________p.g________
        ________J.B__________________),_________
        _________;!B________________C.E_________
        __________i_K_____________Q*:&__________
        ___________gv,YOB______QX;=U____________
        ______________Mnr!!!!!;iUQ______________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        _________________________&)B____________
        ________________________s_Z__Q&_________
        _______________________BHBV;;Lm_________
        ____________________KrVehOhDB___________
        ___________________w_Q___BWJ(;M_________
        _________________r!;;!!B________________
        _______________Qm.G__P.Z________________
        ____________O/:(jO____WY!;jB____________
        __________N=;O___________Bn_u___________
        _________F_P_______________B;!B_________
        ________E.P__________________:*_________
        ________r,___________________h.B________
        ________;!___________________p.g________
        ________J.B__________________),_________
        _________;!B________________C.E_________
        __________i_K_____________Q*:&__________
        ___________gv,YOB______QX;=U____________
        ______________Mnr!!!!!;iUQ______________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ________________________________________
        ________________________________________
        _____________________NB_________________
        ____________________O.)_________________
        ___________________B__=_________________
        ___________________*;V._________________
        __________________V_BW.Q________________
        ______m,TQ_______&.Z_Q.M________________
        _______,=r!wB___B,i___.j_____E&_________
        _______K.QBe!*Z_r=____:v__BV,.u_________
        ________!*___Qc"_Q____r!Mr!Uz.B_________
        ________&.O___________J_xg__=)__________
        ________B;:________________R.hgDMAmeJuLy
        _gZCx*;*iJA________________RYnzeKZZi_=sB
        _C=,j___________________________QT:Lg___
        ___gL:Yg_____________________Bh!*Z______
        ______z_=B___________________$*:yB______
        ___Bn!rmB______________________BGr!K____
        ____$______________________________B____`,
    },
];

let count = 0;
window.addEventListener("load", () => {
    // setInterval(createWorld(count), 1000D;
    setInterval(() => {
      createWorld(count)
      if (count < 2)
        count++
      else
        count = 0
    }, 750);
});
