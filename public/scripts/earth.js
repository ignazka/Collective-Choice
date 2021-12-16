// get element
const ctnEarth = document.querySelector("#earth");
ctnEarth.innerHTML = earthAscii[0].frame;
const earthAscii = [
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`,
  },
  {
    frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*<~*^~~>:,__<28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(<:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^<r((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
@@#wKewXthKZZw]]r=!^=,' ":}Phmez}|<<'D@@
@@8KKe5mmbRWawl]i^:!!<<~'_-impPeV}?(<V@@
@@8h]jhmynuWz}?*?|***!,!rr<,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!<?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^<^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
  },
];
