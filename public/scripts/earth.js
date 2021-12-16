function createWorld() {
    // get element
    const ctnEarth = document.querySelector("#earth");
    ctnEarth.innerHTML = earthAscii[0].frame;
}

const earthAscii = [
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
  @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
    @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
  @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
  @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
    @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
    @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
    @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
      @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
      @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
      @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
      @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
        @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
          @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
          @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
          @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
            @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
              @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
                @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
                  @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
                    @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
                    @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                      @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                      @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                      @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                        @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                        @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                        @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                        @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                          @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                            @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                            @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
                            @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
                            @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
                              @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
                                @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
                                  @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
                                    @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
                                      @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
                                      @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                                        @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                                        @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                                        @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
@@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
    @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
    @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
      @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
        @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
          @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
            @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
              @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
              @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                  @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                  @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                  @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                    @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                      @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                      @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
                      @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
                      @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
                        @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
                          @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
                            @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
                              @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
                                @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
                                @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                                  @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                                  @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
    @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
    @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
      @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
        @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
          @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
            @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
              @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
              @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                  @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                  @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                  @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                    @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                      @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
  @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
  @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
    @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
      @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
        @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
          @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
            @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
            @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
              @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
              @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
              @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
    @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
    @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
      @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
  @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
@@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
  @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
@@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
@@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
  @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
@@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
  @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
    @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
      @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
        @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
          @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
          @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
            @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
            @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
            @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
              @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
              @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
              @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
              @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                  @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                  `,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                  @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
                  @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
                  @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
                    @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
                      @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
                        @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
                          @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
                            @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
                            @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                              @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                              @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                              @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                                @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                                @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                                @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                                @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                                  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                                    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
  @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
    @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
      @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
        @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
        @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
          @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
          @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
          @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
            @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
            @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
            @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
            @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
              @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
                @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
                @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
                  @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
                    @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
                      @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
                        @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
                          @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
                          @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                            @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                            @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                            @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                              @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                              @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                              @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                              @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                                @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                                  @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
    @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
    @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
      @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
        @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
          @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
            @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
              @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
              @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                  @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                  @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
    @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
    @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
      @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
        @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
          @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
            @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
              @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
              @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                  @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                  @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                  @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                    @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                      @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                      @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
                      @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
                      @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
                        @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
                          @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
                            @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
                              @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
                                @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
                                @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                                  @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                                  @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                                  @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                                    @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                                    @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
@@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
  @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
  @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
  @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
    @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
      @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
        @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
          @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
            @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
            @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
              @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
              @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
              @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
@@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
@@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
@@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
@@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
@@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
  @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
    @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
    @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
@@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
@@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
@@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
    @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
    @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
      @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
        @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
          @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
            @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
              @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
              @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                  @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                  @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                  @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                    @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                      @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                      @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
                      @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
                      @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
                        @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
                          @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
                            @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
                              @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
                                @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
                                @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                                  @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                                  @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                                  @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                                    @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
                                    @@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
                                    @@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
                                    @@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
                                      @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
                                        @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
                                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                        `,
    },
    {
        frame: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@#$pXJu}lnhEQ@@@@@@@@@@@@@@
    @@@@@@@@@@Bmx^^*ö~*^~~>:,__ö28@@@@@@@@@@
    @@@@@@@@Z(~^?(?**!=>:^(r(ö:!,_=t@@@@@@@@
      @@@@@@E?!>^r]vi(|?r^ör((i^>~*^~~!e@@@@@@
        @@@@@V]xiriV]?r]]]i~'"-_~??!=v((?~~#@@@@
          @@@@znnyzilJ}lr^(?^(?=" '""-^vl(!,,,#@@@
            @@@ZwewtVnhaV|^^~|}?(!-.!v]eswlur~-,r@@@
              @@#wKewXthKZZw]]r=!^=,' ":}Phmez}|öö'D@@
              @@8KKe5mmbRWawl]i^:!!öö~'_-impPeV}?(öV@@
                @@8h]jhmynuWz}?*?|***!,!rrö,]znyJn]x^n@@
                @@#qwhtyXZPi?nirlV]}(r='ri]i~^:*}nl]^p@@
                @@@$dHVap5qZs(=?tVsVnl}]]i}}rr--lnli*#@@
                  @@@@RWJwhmHqjJu:_]n]nnnn}v?ivr',2n]r$@@@
@@@@#$Zt22VV5WPu,:|G?xVri]!*^=",Vl?6@@@@
@@@@@@QbwlirijmZiV*jxli]vv|*^,^]i]B@@@@@
@@@@@@@#$U2el}vnmV!ö?n(r*vivxi|]R@@@@@@@
  @@@@@@@@@@B%X](r^ö^rv}vV}}nlVGQ@@@@@@@@@
    @@@@@@@@@@@@@QR5V}xvlVjU5Zg#@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
    },
];

window.addEventListener("load", () => {
    createWorld();
});
