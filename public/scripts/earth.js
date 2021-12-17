function createWorld(count) {
    const ctnEarth = document.querySelector("#earth");
    ctnEarth.innerHTML = earthAscii[count].frame;
  }

const earthAscii = [
    {
        frame: `________________________________________
        ______________BgD$MyCZggB_______________
        __________BmE3dDvDrxvcKARRRgB___________
        ________Ex,_,=!!!3vZRREEEEEEEEkB________
        ______Bw_..,rDYYDMREEEEEEEEEEEEEEQ______
        _____gEVd_,XRDDTLimTEEEEEEEEEEEEEEKB____
        ____kEEOF!!jnDTEOhmFhWMOEEEEEEEEEEOxB___
        ___QEEEEEOpZVYxmEEOSpMEROEEEEEEEEEMhD___
        __BEEEEEEEEEEEKhPjx3!3xxTANDEEEEEEEEYg__
        __BEEEEEEEEEEEEEOYd3xDvvdDDYeREEEEEEOg__
        __QEEEEEEEEEOEEEDrDEllEvEEDDxxwKOEEEEQ__
        __BEEEEEEEEEEEEOxDEElvEDEEDr3!!idWEEEB__
        ___DEEEEEEEEEEEERvxlDrrdxd33=:i!eEEED___
        ___BEEEEEEEEEEEEEEYx:ddd3!:,,:!FEEEEB___
        ____BREEEEEEEEEEEEEEr.=!3!:idxhEEERB____
        ______$EEEEEEEEEEEEEi_==!!3VDEEEEk______
        _______BDEEEEEEEEEEH_,,,xnMEEEENB_______
        _________BQREEEEEEET,xhODEEEDQB_________
        _____________BQgDEOLvZONgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        _______________QWPEQMMQBB_______________
        __________BWwlEELhSZ$DRRRRDkQB__________
        ________Kr!ddYSDRRRRRRRRRRRRREzm________
        ______K=!rxyTRRRRRRRRRRRRRRRRREmrm______
        _____iihODnnMRRRRRRRRRRRRRRRRREG_.xB____
        ____M!JJWZUwjaMEORRRRRRRRRRRRERA_..iB___
        ___QEaJvYRRRZWEDEERRRRRRRRRRRRMRD__.r___
        ___RRRREsSJdd3xxLmNkRRRRRRRRRRRROu3="k__
        __BRRRRRROvdxriixDEiVZDRRRRRRRRRRRSwhW__
        __QRRRERRiDEvvvilvlEExVhSMRRRRRRRRRRRO__
        __BRRRRRRvEllivEllDDr3!3!!DMRRRRRRRRRQ__
        ___DRRRRRRxrEDrrxxdr3=i!=3FRRRRRRRRRW___
        ___BRRRRRREJr!ddd3!i²ii!3PRRRRRRRRREB___
        ____BRRRRRRRRl_!333ii=3EsDRRRRRRRRRB____
        ______kRRRRRRn_i!!3!xh$RRRRRRRRRRk______
        _______BNRRRRW,,"i3TWRRRRRRRRRRkB_______
        _________BQDRRx:DW$DRRRRRRRRDQB_________
        _____________BgFwDWMRRRDgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BBBgMkgQQBB_______________
        __________BTCCJMDRRRRRRREAKVKQ__________
        ________ZnJWERRRRRRRREERRRKx=yVM________
        ______WiwRRRRRRRRRRRRRRRROOy___ing______
        _____TYMRRRRRRRRRRRRRRRRRRi.......xB____
        ____HZnzMERRRRRRRRRRRRROERx........iB___
        ___KnROOROERRRRRRRRRRRROORx,,__.....r___
        __BRwVxdDYZkDRRRRRRRRRRRRRDSr3=!==":²k__
        __BRODxDirDlcKDRRRRRRRRRRRRRRSXmZGLDrh__
        __QEVEvvvlvEExceSWRRRRRRRRRRRRRRRRaxre__
        __BRwDlilElDDd!3!!reRRRRRRRRRRRRRRRx!W__
        ___DRVrDxxx3d!i!i=iWRRRRRRRRRRRRRRP!x___
        ___BRRex!d3!i:i=3rDRRRRRRRRRRRRRRR3_$___
        ____BRRM,=33===dlmDRRRRRRRRRRRRRRH,W____
        ______$Rn,==!3TgRRRRRRRRRRRRRRRRRjB_____
        _______BNn"i=nDRRRRRRRRRRRRRRRRkB_______
        _________BMxmgRRRRRRRRRRRRRRNQB_________
        ____________BQQgORRMREDkgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        _______________QQQQgQgQQQB______________
        __________B$kDRRRRRRDWCE!dxiUQ__________
        ________QMRDRRRRERRRRmd!LzYnLDTG________
        ______BRRRRRRRRRRREMWY_...._DTxilF______
        _____gRRRRRRRRRRRRRJ_............_xB____
        ____SRRRRRRRRRREERR3..............,3B___
        ___gWORRRRRRRRRRORR=,,______.......:v___
        __BELMDRRRRRRRRRRRRRVxd!!!=!=²==!=:=!g__
        __OrDluWRRRRRRRRRRRRREmUPPOOVLDDxrx=,W__
        __SvvlEDFKMRRRRRRRRRRRRRRRRREVrdrrD3xQ__
        __RvEED!3!!lERRRRRRRRRRRRRRRRRv!!!3"jB__
        ___ixd3!==!VRRRRRRRRRRRRRRRRRRv!!3!3m___
        ___Br3!:i!xDRRRRRRRRRRRRRRRRRJ_,,,dJQ___
        ____Qd3!!ijRRRRRRRRRRRRRRRRRRS___dSQ____
        _____Br=3pRRRRRRRRRRRRRRRRRRRK_:YD______
        _______ArkRRRRRRRRRRRRRRRRRRRMW$B_______
        _________BgERRRRRRRRRRRRRRRRNQB_________
        _____________BQk$RRRRRRkgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        _______________BBQkBRGgDgB______________
        ___________BgERROPDdxxxd3!riwg__________
        ________BkRERRREr!xLTiPsyLLEx:dm________
        ______B$RRRREMZr_.....,3v3rix,._,C______
        _____QRRRRRRpd..............._3__=rB____
        ____kRRRRERR3................._D=._n____
        ___QRRRRROEZ,,,_______...___.__,d:rZk___
        __BRRRRRRRRRHrd!!!=!!==!=!!!=²:3²:iHRB__
        __AURRRRRRRRRRShPPMRhJEDDrxrrx!,,_rRRB__
        __PEsMRRRRRRRRRRRRRREOvDdrrDDrr!,TRRRQ__
        __Ed!!PRRRRRRRRRRRRRRREv!!33!d:,vRRRRB__
        ___d=dORRRRRRRRRRRRRRRRz=!!33!!xlEHRk___
        ___D=3ORRRRRRRRRRRRRRRZ,,"":::!LPDGRB___
        ____AvERRRRRRRRRRRRRRRDx____,=yRnmRB____
        _____QMRRRRRRRRRRRRRRRRW,___rHRRRk______
        _______BNRRRRRRRRRRRRRRRanzSRRRkB_______
        _________BQDRRRRRRRRRRRRRRRRNQB_________
        ____________BBQg$RRRRRR$gQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        _______________BBOWTUPAMkB______________
        ___________BgMxxdrd!!rvE3"3xVg__________
        ________BkRndrTYZjAYVvrx=_=i".=F________
        ______BNEMD,....=dD"3rrx_...,...,F______
        _____gRMx_............._D3..,x!33_xB____
        ____kRO".................DL_...!RZr!B___
        ___QROL_______.._.__..__,,=dxiUORRRlH___
        ___RRRSx!=!=!==!=!!3!=i"!3:_,_jRRRROVB__
        __BRRRRMemPMZViDDDxrrrd!"_,_,LRRRRRDOB__
        __kRRRRRRRRRREYDdrrDrvdrd",YORRRRRRRRQ__
        __ZKRRRRRRRRRRRu!!!d!!x:,:nRRRRDDRRRRB__
        ___mRRRRRRRRRRRT!!!!3!3!x!vEEZRRRDRR$___
        ___QRRRRRRRRRRRY,":"=iii!DyWELRRRRRRB___
        ____BRRRRRRRRRRRr____,"=VRREvOEERRRB____
        ______kRRRRRRRRROr___,!FERRMRRRRRk______
        _______B$RRRRRRRRDnYYVMRRRRRRRRkB_______
        _________BQDRRRRRRRRRRRRRRRRDQ__________
        _____________BQgkRRRREODgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BQDZPhhXKWkB______________
        __________BSuE33rivd"d!___,rwg__________
        ________DjVyneiiDd,,__ni...___iz________
        ______BL,__vY3rDD!....3_....____,X______
        _____X,..........Ed..._r33vLD____,xB____
        ____i.............nY....,DMRRWY,,!YrB___
        ___A_......_...__,,3xDLjORRRRRDu_KRhn___
        ___n!==i==!!!=²"=d=____VRRRRRRRRnyREmB__
        __BMwmSurDrxrrx!i_,__!eRRRRRRRRNRORRmk__
        __QRRRRADdrrrErdx"_rSRRRRRRRRRRRRRRRWZ__
        __BRRRRRm3!33!d=,,rERRRRR$RRRRRDRRRRRB__
        ___NRRRRRr!!!3!!d3!PEETERRR$RRRRRRRR$___
        ___BRRRRR3,,,ii²=3DKZLrTRRRRRRRRRRRRB___
        ____BRRRROd___,,!jRRTimREERRRRRRRRRB____
        ______kRRRMx___,LORRZpRRRRRRRRRRRk______
        _______B$RRRPVVXRRRRRRRRRRRRRRRkB_______
        _________BQDRRRRRRRRRRRRREORNQB_________
        _____________BQgkEEREMO$gQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BgOHheCwmWgB______________
        __________QPTr3ix=______,==DXQ__________
        ________NYx!x3i_rv....___.....=F________
        ______mnTYul_..,i.......______,=3S______
        ____Bx.....L....rx3xnVr_____,i!dd!Y_____
        ____=......iD..._=TMRRREi,,,lmUx33iO____
        ___D....._,_rxlYWORRRRRRDv_TRRRMj!DTR___
        __g:"i!i"i3²_,_DRRRRRRRRRRTYMRRR$PyOWB__
        __gVDxrx3²_,_²nRRRRRRRRR$DRERRRRWjFNFQ__
        __QZxrrl3x,iyERRRRRRRRRRRRRRRRRRRSveYk__
        __BRL!!!3,iVRRRRR$RRRRRRDRRRRRRRRRGmWB__
        ___$h=!3!!ddOERWRRRNDRRRRRRRRRRRRRRRO___
        ___BM3,,":3iMUxcRRRRRRRRRRRRRRRRRRRXg___
        ____BEd__"rORV=SREERRRRRRRRRRRRRRRiW____
        ______$n,_LRREZRRRRRRRRRRRRRRRRRRZB_____
        _______BDMERRRRRRRRRRRRRRRRRRRRkB_______
        _________BQDRRRRRRRRRRRRRRRRNQB_________
        _____________BQg$OMOEMMDgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BgMmwjFhSMgB______________
        __________Qhli,_____,,,,"=!raQ__________
        ________Gi!xi...___......____:vk________
        ______QY_._.......______,i3d!!=LMg______
        ____Bx=...v!DLcr._____,=!3xx!3!!HDg_____
        ___Bi.i_.._rZRRDE3,_iiGEWr!3!LVOEMRk____
        ___D._ddDJMRRRRRRp:,MRRRREMrd!TRRXWRg___
        __g:,!_i!WRRRRRRRRhYyRRRRRkX$JMRDEJWEB__
        __Sx=,_3ZRRRRRRRD$RRERRRRRGaEZkMjVOMRB__
        __Ur3,VRRRRRRRRRRRRRRRRRRRRZvxWLvjhWmg__
        __M!i!ERRR$RRRRRDRRRRRRRRRRROjXpOOHOZg__
        ___x!3VEZERR$RRRRRRRRRRRRRRRRRRRROMVS___
        ___D,=eA3ARRRRRRRRRRRRRRRRRRRRRRDJ,_k___
        ____Z"nOxpRORRRRRRRRRRRRRRRRRRMr,_,Z____
        _____QVRRRRRRRRRRRRRRRRRRRRRRRniDvQ_____
        _______BkRRRRRRRRRRRRRRRRRRRRRZ$B_______
        _________BQDRRRRRRRRRRRRRRRRNQB_________
        _____________BQgRWMROMTRgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BkWGUeehKZkB______________
        __________gjr",,,,_,,,:,:!dnDB__________
        ________W3.___....._____iiETeMWB________
        ______w,,.._,,___,i=dd3d==!JgZhENB______
        ____Bdddx!.____,=!!dxd!3!3ihgRRRRRg_____
        ___B!.!PRRD,,=YHRA=!3!xPPkDEPRRRRRRk____
        ___L3VRRRRU,rORRRRDUDx!xORRECSRRRRERQ___
        __g"YRRRRRDnLORRRERRegVODRDMOTKRERRRR___
        __j=MRRRRDRRERRRRRZXnikgRGuTEEMERRRRRB__
        __VPRRRRRRRRRRRRRRROVrVOYvDaJSWWmPpEEQ__
        __WARDRRRDRRRRRRRRRRRZnFZpDgPZME$aisWB__
        ___nSRDRRRRRRRRRRRRRRRRRRRMTWRQhygFON___
        ___QxZERRRRRRRRRRRRRRRRRRRRkAr,,²xxDB___
        ____QPERRRRRRRRRRRRRRRRRRjE3______YB____
        ______kRRRRRRRRRRRRRRRRRDx,,,=,_"V______
        _______BkRRRRRRRRRRRRRRRRFJUODXJB_______
        _________BQNRORRRRRRRRRRRRRRDQB_________
        _____________BQgNRMMMMMRgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BgMGszjeKWQB______________
        __________gyxi,",:,_i=3diZZTB___________
        ________C=....____":dUihMKcREEkB________
        ______j__.__,=d333i==nBgGMEREEEEDB______
        ____Bd.._,²!3xd!!!diFTDEEEEEREEEEEg_____
        ___BeF_,rwG3!!!iXM$RMeEEEEEEEREEEEEk____
        ___WEh,mREREvDi3CRRRMjmOEEEEEEEEEEEEQ___
        __BEEZlOEEEkCgeGkRRMEWYhEEEEEEEEREEER___
        __QERROEEEEmFDRkDAVvWEOOOREEEEEEREEEEB__
        __QERREEEEEOmDYWnEEnXwZMWZmSKWREOREEOQ__
        __BRREEEEEEERMJzZKOQWSOOEOEHlvnZWMOEEB__
        ___DEEEEEEEEEEEEREMWAWMggwSDEVEZRROOD___
        ___BEEEEEEEEEEEEEEERkDY!=,"Li=ODRROOB___
        ____BRERREEEEEEEERXLr"________3DRREB____
        ______kEEEEEEEEEERn_,,,,___._"vOE$______
        _______B$EEEEREEEERTLuwPZVx!EUEOB_______
        __________QDEEEEEEEEEEEEEERMDQB_________
        _____________BQgRTTMMTMDgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BNAmwFPMDggB______________
        __________gyr!:,=!dlFeOOPORgB___________
        ________J:.._,=nLTWmVPEEEEEEEEkB________
        ______z__i!!:iiMBRZOEEEEEEEEEEEEDB______
        ____Bx,!3!!!xTG$EEEEEEEEEEEEEEEEEEg_____
        ___B!i!!!nVEDZAEEEEEEEEEEEEEEEEEEEEk____
        ___VGRn!iiRRRXXZEEEEEEEOEEEEEEEEEEEEg___
        __BVEOmknEERMOTVEEOOEEEEEEEEEEEEEEEEEB__
        __BMEWJTkRUYyEOMOEEEEEEEEEEEEEEEEEEEEB__
        __QEEEhDGnvDPVAMZMsZaAOREOOEEEEEEOEEEQ__
        __BEEEEZyASR$mWMOOOOYllcAZMTMEEEEEEEEB__
        ___DEEEEEEEOWAMDBpKWDpVRGOOEOMEEEEEOD___
        ___BEEEEEEEERgSx!,,!jniFRREEEROOEMEEB___
        ____BREEEEEWDd______.._,lDRRRMOEEEEB____
        ______kEEEEOv_,_____..__"LEEEEEEE$______
        _______B$EEEEwTVXGmLx,:!VOEERMZDB_______
        _________BQDEEEEEEEEEMHOEEEpZgB_________
        _____________BQgRMWMMME$gQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________B$OEMWwHDQB_______________
        __________gFD3xLnWOOWEEOOOM$B___________
        _______BJ=!xTPewEEEEEEEEEEEEEEkB________
        ______X=,=QRPZEEEEEEEEEEEEEEEEEEDB______
        ____Bl!!vOREEEEEEEEEEEEEEEEEEEEEEEg_____
        ___BxrFWZEEEEEEEEEEEEEEEEEEEEEEEEOMk____
        ___U=ZEemEEEEEEOEEEEEEEEEEEEEEEEEEEEQ___
        __BZJEOZLEEOEEEEEEEEEEEEEEEEEEEEEEEEEB__
        __QVReJETMEEEEEEEEEEEEEEEEOEEEEEEEEOEB__
        __QTyljFWWPKUPMEEOOEEEEEEEEOEEEEEEEEEQ__
        __BMKAOmWOORhElYKZZMMOEEEEEEEEEEEEEEEB__
        ___DEEOMDQmeTRTRSWEEOMMEEEEEEEEOEEEED___
        ___BEERgY,__dJddMREEEEEETEEEWEEEEEEEB___
        ____BRM=_____.._"xNRRREWOEEEEEEEEEEB____
        ______kZd,___..__,3MEEEEEEEEEEEEE$______
        _______BDSWROzv²"!nEEEEEEZMEEEEDB_______
        _________BQDEEEEMZEEEEMUAZEERQB_________
        _____________BQgETMOEER$gQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BQMHMMNgQQQB______________
        __________QpsUOOpOOOOMOMMOOkB___________
        ________KVVSWEEOOOOOOOOOOOOOOEkB________
        ______ZmXPWOOOOOOOOOOOOOOOOOOOOOEQ______
        ____BnWEEEOOOOOOOOOOOOOOOEOEOOOOOOg_____
        ____hWEOOOOOOOEOOOOOOOOOOOOOOMWOOOOk____
        ___RaOOOOOOOOOOOOOOOOOOOOOEOOOOOOOOOQ___
        __BWFOOOOOOEEOEOOOOOEOEOOOOOOOOOOOOOEB__
        __gPWEOOOOOEOOEOEOEOOOOOOOOOEOOEOOOOOB__
        __AjWmmPOOOOOOOOOOOMOOEEOEOOOOOOOOOOOQ__
        __QAWRGEiaATWMOEOOOOOEEOOEEOOOOOOOOOOB__
        ___DNzzkjWTOOOWOOOOEOEOOEEOOOOEOOOOOR___
        ___BL__r:iREOOOEMMOOOWEOOOOOEOOOOOOEB___
        ____D"__..iVDEROWOOOOOEEEOOOOOOOOOEB____
        _____Blr:._,EEEOEEOOOEOOOOOOOOOOONB_____
        _______B$mvxYEEEOEETOOOOOOOOOOEDB_______
        _________BQDWOOOOOeGmEEOOOOORQB_________
        _____________BQgROOEEEENgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BQgkggWpMgQB______________
        __________BQRmWMMMMMOOOOOTmZEB__________
        ________gWMOOOOOOOOOOOOOOOOOOUvX________
        ______gZOOOOOOOOOOOOOOOOOOOOOOOyrU______
        _____kOOOOOOOOOOOOOOOOMOOOOOOOOOOCiB____
        ____DOOOOOOOOOOOOOOOOOOWTOOOOOOOOOWF____
        ___gOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOD___
        __BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB__
        __QOOOOOOOOMOOOOOOOOOOOMOOOOOOOOOOOOOQ__
        __khMMOOOOOMMOOOOOOOOOOOOOOOOOOOOOOOOQ__
        __BznHWTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB__
        ___VeWOMMOOOOOOOOOOOOOOOOOOOOOOOOOOOR___
        ___R_iOOOOWOOMWOOMOOOOOOOOMMOOOOOOOOB___
        ____p.!mEMWOOOOOOOOOOOOOOOOOOOOOOOOB____
        _____Qx,KOOOOOOOOOOOOOOOOOOOOOOOODB_____
        _______gSWOOOMZMOOOOOOOOOOOOOOORB_______
        _________BQROGCTEOOOOOOOOOOOEgB_________
        _____________BQgDEOOOOORkQBB____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BBQOAWTWZWgB______________
        __________BQNMOMOOOOOOOWwL3iUB__________
        ________BNOOOOOOOOOOOOOOOOn"..dS________
        ______BROOOOOOOOOOOOOOOOOOOMz3_.!Z______
        _____gOOOOOOOOOOOOOOOOOOOOOOOOjr,:M_____
        ____NOOOOOOOOOOOZOOOOOOOOOOOOOOOWDvZ____
        ___gOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPup___
        __BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOZB__
        __BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOQ__
        __QOOOMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOk__
        __QWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOQ__
        ___OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR___
        ___BMMOOMOOOOOOOOOOOOOOOOOOOOOOOOOOOB___
        ____gZOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB____
        _____BDOOOOOOOOOOOOOOOOOOOOOOOOOODB_____
        _______BNMGOOOOOOOOOOOOOOOOOOOODB_______
        _________BODEOOOOOOOOOOOOOOORgB_________
        _____________BQgNEOOOOODgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BQgRZsemSMgB______________
        ___________BgOMEEEEOhxi=":dcMB__________
        ________B$EEEEEEEEEEEV,._.__²dEW________
        ______BDEEEEEEEEEEEEEEOXd,_._i33nB______
        _____gEEEEEEEEEEEEEEEEEEMeYx__ZOWmk_____
        ____$EEEEMWEEEEEEEEEEEEEEEEEnxxanhJT____
        ___gEEEEEEEEEEEEEEEEEEEEEEEEEEWKnYeZg___
        __BEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEamDQ__
        __BEEEEEOEEEEEEEEEEEEEEEEEEEEEEEEEEMdH__
        __QOEEEEEEEEEEEEEEEEEEEEEEEEEEEEEOEzDP__
        __BEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEcDE__
        ___DEOEEEEEEEEEEEEEEEEEEEEEEEEEEEEEyD___
        ___BOEEEEEEOOOEEEEEEEEEEEEEEEEEEEEEeO___
        ____BREEEEEEEEEEEEEEEEEEEEEEEEEEEEPW____
        ______$EEEEEEEEEEEEEEEEEEEEEEEEEEHQ_____
        _______QDEEEEEEEEEEEEEEEEEEEEEEMg_______
        _________BQDEEEEEEEEEEEEEEEERgB_________
        _____________BQgNREEEEEDgQB_____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BgMpmseXAgBB______________
        ___________BkOEMr!!,_,=driETMB__________
        ________BkEEEEEW=..____,!3!33wkB________
        ______BDEEEEEEEEOn3__._,diliDMEEDB______
        _____gEEEEEEEEEEEESVT!__hERNOnzMEEg_____
        ____kMEEEEEEEEEEEEEEEPixxVnxMAeewWOk____
        ___QEEEEEEEEEEEEEEEEEEEEMMhnxYEEOMOOQ___
        __BEEEEEEEEEEEEEEEEEEEEEEEEEEhUKx3EVRB__
        __BEOEEEEEEEEEEEEEEEEEEEEEEEEEEGddDrYQ__
        __QEEEEEEEEEEEEEEEEEEEEEEEEOEEMxDElEDp__
        __BEEEEEEEEEEEEEEEEEEEEEEEEEEEGxEElDxZ__
        ___DEEEEEEEEEEEEEEEEEEEEEEEEEEEVxrx3d___
        ___BEEOOEEEEEEEEEEEEEEEEEEEEEEEOv,3!R___
        ____BREEEEEEEEEEEEEEEEEEEEEEEEEEx:dD____
        ______kEEEEEEEEEEEEEEEEEEEEEEEOr,lB_____
        _______BNEEEEEEEEEEEEEEEEEEEEPrxg_______
        _________BQREEEEEEEEEEEEEEEKJmB_________
        _____________BQgNEEEEEEDgQBB____________
        ________________________________________`,
    },
    {
        frame: `
        ________________________________________
        ______________BgOSeaZESTQB______________
        ___________Bsd!,,:!xiDDrxveRB___________
        ________BkEl_.____=!!!33TEDRRRkB________
        ______BDEEEn²_.._²ixYTDhDEEEEEEEDB______
        _____gEEEEEOnu!__nER$DZLiPOEEEEEEEg_____
        ____kEEEEEEEEEwD!xVYdHEEmhFXWOOEEEEk____
        ___gEEEEEEEEEEEEETOwnlvEEEMSMEMEEEEEg___
        __BEEEEEEEEEEEEEEEEEEOemPu!33xDsDREEEB__
        __BEEEEEEEEEEEEEEEEEEEEEMi33rlExDcWEEB__
        __QEEEEEEEEEEEEEEEEMEEEExrDElElEDDDjMQ__
        __BEEEEEEEEEEEEEEEEEEEEZdDEDvlDDDr==TB__
        ___DEEEEEEEEEEEEEEEEEEEEWdDDrxdd!!:xE___
        ___BEEEEEEEEEEEEEEEEEEEEEGE"!3d!,,3SB___
        ____BEEEEEEEEEEEEEEEEEEEEEE3_!!!dnWB____
        ______$EEEEEEEEEEEEEEEEEEEY_":=iW$______
        _______BDEEEEEEEEEEEEEEEEw,,3TZNB_______
        _________BQREEEEEEEEEEEOu!cW$QB_________
        _____________BQgDEEEEOOFVQB_____________
        ________________________________________
                                        `,
    },
];

let count = 0;
window.addEventListener("load", () => {
    // setInterval(createWorld(count), 1000D;
    setInterval(() => {
      createWorld(count)
      if (count < 18)
        count++
      else
        count = 0
    }, 200);
});
