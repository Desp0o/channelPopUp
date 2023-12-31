const tv = './images/tv.png'
const desktop = './images/desktop.png'
const mobile = './images/mobile.png'

const channelsDB = [

    {
        icon: './images/channels/tv_gpbhd.png',
        name: 'პირველი არხი',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile,
    },

    {
        icon: './images/channels/tv_gpbhd.png',
        name: 'პირველი არხი HD',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile
    },


    {
        icon: './images/channels/teleskola.png',
        name: 'ტელესკოლა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_pirvelitv.png',
        name: 'პირველი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/rustavi2.png',
        name: 'რუსთავი 2',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/mtavari.png',
        name: 'მთავარი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/posttv.png',
        name: 'POSTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/formula.png',
        name: 'ფორმულა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/euronewsGeorgia.png',
        name: 'Euronews Georgia',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/imedi.png',
        name: 'იმედი',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/gds.png',
        name: 'GDS',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/maestro.png',
        name: 'მაესტრო',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/marao.png',
        name: 'მარაო',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/artarea.png',
        name: 'არტარეა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/palitra.png',
        name: 'Palitra News',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/kavkasia.png',
        name: 'კავკასია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა HD',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bmg.jpg',
        name: 'BMG',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_gms.png',
        name: 'GMS',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkuniversal.png',
        name: 'Silk უნივერსალი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkdocu.png',
        name: 'Silk დოკუმენტური',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkholywood.png',
        name: 'Silk კინო ჰოლივუდი',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkkids.png',
        name: 'Silk ქიდს',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkcollection.png',
        name: 'Silk კინო კოლექცია',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silk1.png',
        name: 'Silk Sport HD 1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    

    {
        icon: './images/channels/silk2.png',
        name: 'Silk Sport HD 2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/silk3.png',
        name: 'Silk Sport HD 3',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/1stereo.png',
        name: '1 სტერეო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/comedy.png',
        name: 'კომედი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/agro.png',
        name: 'აგრო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/msuicbox.png',
        name: 'MUSIC BOX',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/starvision.png',
        name: 'სტარვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bbb.png',
        name: 'ბასტი ბუბუ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/ertsulovneba.png',
        name: 'ერთსულოვნება',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_qartuli.png',
        name: 'ქართული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    
    {
        icon: './images/channels/tv_tvc.png',
        name: 'TVC',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_puls.png',
        name: 'პულსი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_musictv.png',
        name: 'დარდიმანდი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_malltv.png',
        name: 'მოლი ტვ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_obiektivi.png',
        name: 'ობიექტივი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_trialeti.png',
        name: 'თრიალეთი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv24.png',
        name: 'TV 24',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_rioni.png',
        name: 'რიონი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/rioni2.png',
        name: 'რიონი 2',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_sdasutv.png',
        name: 'სდასუ TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_diatv.png',
        name: 'დია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_lilotv.png',
        name: 'L-TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_megatv.png',
        name: 'Mega TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_tv25.png',
        name: 'TV 25',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_radioimedi.png',
        name: 'რადიო იმედი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/GeoCannel.png',
        name: 'GeoCannel',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/rugby.png',
        name: 'რაგბი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvsport.png',
        name: 'TV SPORT',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_enkibenki.png',
        name: 'ენკიბენკი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/spero.png',
        name: 'სფერო ნიუსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_foodtv.png',
        name: 'Food TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv8channel.png',
        name: 'TV8',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_viptv.png',
        name: 'Vip TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_discovergeorgia.png',
        name: 'Discover Georgia HD',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_marneulitv.png',
        name: 'მარნეული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvmax.png',
        name: 'TVMax',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_shonitv.png',
        name: 'SHONI TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_mbctv.png',
        name: 'MBC TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv12.png',
        name: 'TV 12',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_hitv.png',
        name: 'HI TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvmze.png',
        name: 'TV მზე',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/sezonitv.png',
        name: 'სეზონი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_agtv.png',
        name: 'AG TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_parvanatv.png',
        name: 'Parvana TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_positivetv.png',
        name: 'Positive TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_egrisi.png',
        name: 'ეგრისი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_mzareulitv.png',
        name: 'მზარეული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tavisupali_iliontv.png',
        name: 'თავისუფალი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/kolkheti89.png',
        name: 'კოლხეთი 89',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_borjomi.png',
        name: 'ბორჯომი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_mecxretalga_nwbctv.png',
        name: 'მეცხრე ტალღა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv9.png',
        name: 'TV 9',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_ctv.png',
        name: 'CTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_axali.png',
        name: 'ახალი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_primetv.png',
        name: 'Prime TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvplus.png',
        name: 'TV პლიუსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_imervizia.png',
        name: 'იმერვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_gurjaani.png',
        name: 'გურჯაანი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_qvemoqartli.png',
        name: 'TV 4',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_o2.png',
        name: 'O2',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_tvsaperavi.png',
        name: 'საფერავი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_pktv.png',
        name: 'PK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_batumitv.png',
        name: 'ბათუმი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_guriatv.png',
        name: 'გურია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_stereoplus.png',
        name: 'სტერეო+',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_toktv.png',
        name: 'TOK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_chadrakitv.png',
        name: 'ჭადრაკი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_kartuliarkhi.png',
        name: 'ქართული არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/girchi.png',
        name: 'გირჩი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_argotv.png',
        name: 'არგო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_gmtv.png',
        name: 'GMTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/greentv.png',
        name: 'Green TV - ჩხენკელი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/meteo.png',
        name: 'Meteo 24',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/odishi.png',
        name: 'ოდიში TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tanamgzavri.png',
        name: 'თანამგზავრი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/georgianTimes.png',
        name: 'ჯორჯიან თაიმსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/altinfo.png',
        name: 'ალტ-ინფო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv5geo.png',
        name: 'მეხუთე არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_agrogaremo.png',
        name: 'აგროგარემო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_drotv.png',
        name: 'სამეფო არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/abkhazia.png',
        name: 'აფხაზეთის ხმა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_monitoring.png',
        name: 'TV Monitoring',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_erimedia.png',
        name: 'ერი მედია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/gmc.png',
        name: 'GMC',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_viasatsport.png',
        name: 'Viasat Sport',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/viassat1000.png',
        name: 'Viasat 1000',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/viassatAction.png',
        name: 'Viasat Action',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_viasatexp.png',
        name: 'Viasat Explorer',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_viasathist.png',
        name: 'Viasat History',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_viasatnat.png',
        name: 'Viasat Nature',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киномикс',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киносвидание',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Кинохит',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киносемья',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Кинопремьера',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Кинокомедия',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Киносерия',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Мужское кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Наше Новое кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinomiks.png',
        name: 'Индийское Кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amedia1.png',
        name: 'Amedia 1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amedia2.png',
        name: 'Amedia 2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amediahit.png',
        name: 'Amedia HIT',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/amediapremium.png',
        name: 'Amedia Premium HD',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_auto24.png',
        name: 'Авто 24',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_autoplus.png',
        name: 'Авто плюс',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_365day.png',
        name: '365 дней',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_detskymir.png',
        name: 'Детский Мир',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_davinci.png',
        name: 'Da Vinci Learning',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_dw.png',
        name: 'Deutsche Welle',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_domashni.png',
        name: 'Домашний',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_nastaiashivremia.png',
        name: 'Настоящее время',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_laminor.png',
        name: 'ЛяМинор',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kuxnia.png',
        name: 'Кухня',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kvartal95.png',
        name: 'КВАРТАЛ 95',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/khl.png',
        name: 'KHL',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/khlprime.png',
        name: 'KHL Prime',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_illuzionplus.png',
        name: 'Иллюзион+',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_24techno.png',
        name: 'Т24',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_hdlife.png',
        name: 'HD Life',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/tv_oruzhie.png',
        name: 'Оружие',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_bollywoodhd.png',
        name: 'Bollywood HD',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_nostalgy.png',
        name: 'Ностальгия',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_perec.png',
        name: 'Перец',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_mezzo.png',
        name: 'Mezzo',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_espressotv.png',
        name: 'Espresso TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_arirangworldtv.png',
        name: 'ARIRANG',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_1plus1international.png',
        name: '1+1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_radnoekino.png',
        name: 'Родное Кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_fenikspluskino.png',
        name: 'ФЕНИКС+КИНО',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/vegetarian.jpeg',
        name: 'Первый Вегетарианский',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_friday.png',
        name: 'ПЯТНИЦА',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/red.png',
        name: 'Red',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/RuTV.png',
        name: 'Ru TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_rusilluzion.png',
        name: 'Русский Иллюзион',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/scifi.png',
        name: 'Sci-Fi',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/viasatruskoe.png',
        name: 'TV1000 Русское кино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    

    {
        icon: './images/channels/uspeh.png',
        name: 'У​с​п​е​х',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_unikum.png',
        name: 'Уникум',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_ktoestkto.png',
        name: 'Кто есть Кто',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_kinoujas.png',
        name: 'Киноужас',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_mir.png',
        name: 'Мир',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_mir24.png',
        name: 'Мир 24',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/NIKIjunior.png',
        name: 'NIKI Junior',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/NIKIkids.png',
        name: 'NIKI KIDS',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/Ictimai.png',
        name: 'Ictimai TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/mujskoi.jpg',
        name: 'Мужской',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/oce.png',
        name: 'OCE',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_ctctv.png',
        name: 'CTC',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/ICTV.png',
        name: 'ICTV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/ICTV2.jpg',
        name: 'ICTV2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/jivi.jpg',
        name: 'ЖИВИ!',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/kvn.jpg',
        name: 'КВН ТВ',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/newchannel.png',
        name: 'NEW Channel',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/galaxy.png',
        name: 'Тайны Галактики HD',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/m1.png',
        name: 'M1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/m2.png',
        name: 'M2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/malish.png',
        name: 'Малиш',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/tv_matchplaneta.png',
        name: 'МатчПланета',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/bbc.png',
        name: 'BBC World News',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/boxtv.png',
        name: 'Бокс ТВ',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/CCTV.png',
        name: 'CCTV 4',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/Black.png',
        name: 'Black',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/evrokino.png',
        name: 'Еврокино',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/zoopark.png',
        name: 'зоопарк',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },
    


    {
        icon: './images/channels/zagodnaiajizn.jpg',
        name: 'Загородная Жизнь',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },
    
    {
        icon: './images/channels/stb.png',
        name: 'CTB',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },
    

    {
        icon: './images/channels/zeetv.png',
        name: 'Zee TV',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },
]

const abroadChannelsDB = [
    
    {
        icon: './images/channels/tv_gpbhd.png',
        name: 'პირველი არხი',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile,
    },

    {
        icon: './images/channels/tv_gpbhd.png',
        name: 'პირველი არხი HD',
        isBasePack: true,
        isFaded: false,
        tv: tv,
        desktop: desktop,
        mobile: mobile
    },


    {
        icon: './images/channels/teleskola.png',
        name: 'ტელესკოლა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_pirvelitv.png',
        name: 'პირველი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/rustavi2.png',
        name: 'რუსთავი 2',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/mtavari.png',
        name: 'მთავარი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/posttv.png',
        name: 'POSTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/formula.png',
        name: 'ფორმულა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/euronewsGeorgia.png',
        name: 'Euronews Georgia',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/imedi.png',
        name: 'იმედი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/gds.png',
        name: 'GDS',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },


    {
        icon: './images/channels/maestro.png',
        name: 'მაესტრო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${''}`,
        mobile: `${''}`
    },

    {
        icon: './images/channels/marao.png',
        name: 'მარაო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/artarea.png',
        name: 'არტარეა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/palitra.png',
        name: 'Palitra News',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/kavkasia.png',
        name: 'კავკასია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/adjara.png',
        name: 'აჭარა HD',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bmg.jpg',
        name: 'BMG',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_gms.png',
        name: 'GMS',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkuniversal.png',
        name: 'Silk უნივერსალი',
        isFaded: true,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkdocu.png',
        name: 'Silk დოკუმენტური',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkholywood.png',
        name: 'Silk კინო ჰოლივუდი',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkkids.png',
        name: 'Silk ქიდს',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silkcollection.png',
        name: 'Silk კინო კოლექცია',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/silk1.png',
        name: 'Silk Sport HD 1',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    

    {
        icon: './images/channels/silk2.png',
        name: 'Silk Sport HD 2',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/silk3.png',
        name: 'Silk Sport HD 3',
        isFaded: true,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/1stereo.png',
        name: '1 სტერეო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/comedy.png',
        name: 'კომედი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/agro.png',
        name: 'აგრო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/msuicbox.png',
        name: 'MUSIC BOX',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/starvision.png',
        name: 'სტარვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/bbb.png',
        name: 'ბასტი ბუბუ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/ertsulovneba.png',
        name: 'ერთსულოვნება',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_qartuli.png',
        name: 'ქართული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },
    
    {
        icon: './images/channels/tv_tvc.png',
        name: 'TVC',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_puls.png',
        name: 'პულსი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_musictv.png',
        name: 'დარდიმანდი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_malltv.png',
        name: 'მოლი ტვ',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_obiektivi.png',
        name: 'ობიექტივი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_trialeti.png',
        name: 'თრიალეთი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv24.png',
        name: 'TV 24',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_rioni.png',
        name: 'რიონი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/rioni2.png',
        name: 'რიონი 2',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_sdasutv.png',
        name: 'სდასუ TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_diatv.png',
        name: 'დია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_lilotv.png',
        name: 'L-TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_megatv.png',
        name: 'Mega TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_tv25.png',
        name: 'TV 25',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_radioimedi.png',
        name: 'რადიო იმედი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/GeoCannel.png',
        name: 'GeoCannel',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/rugby.png',
        name: 'რაგბი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvsport.png',
        name: 'TV SPORT',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_enkibenki.png',
        name: 'ენკიბენკი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/spero.png',
        name: 'სფერო ნიუსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_foodtv.png',
        name: 'Food TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv8channel.png',
        name: 'TV8',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_viptv.png',
        name: 'Vip TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_discovergeorgia.png',
        name: 'Discover Georgia HD',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_marneulitv.png',
        name: 'მარნეული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvmax.png',
        name: 'TVMax',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_shonitv.png',
        name: 'SHONI TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_mbctv.png',
        name: 'MBC TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv12.png',
        name: 'TV 12',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_hitv.png',
        name: 'HI TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvmze.png',
        name: 'TV მზე',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/sezonitv.png',
        name: 'სეზონი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_agtv.png',
        name: 'AG TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_parvanatv.png',
        name: 'Parvana TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_positivetv.png',
        name: 'Positive TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_egrisi.png',
        name: 'ეგრისი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_mzareulitv.png',
        name: 'მზარეული TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tavisupali_iliontv.png',
        name: 'თავისუფალი არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/kolkheti89.png',
        name: 'კოლხეთი 89',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_borjomi.png',
        name: 'ბორჯომი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_mecxretalga_nwbctv.png',
        name: 'მეცხრე ტალღა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tv9.png',
        name: 'TV 9',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_ctv.png',
        name: 'CTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_axali.png',
        name: 'ახალი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_primetv.png',
        name: 'Prime TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tvplus.png',
        name: 'TV პლიუსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_imervizia.png',
        name: 'იმერვიზია',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_gurjaani.png',
        name: 'გურჯაანი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_qvemoqartli.png',
        name: 'TV 4',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_o2.png',
        name: 'O2',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_tvsaperavi.png',
        name: 'საფერავი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_pktv.png',
        name: 'PK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_batumitv.png',
        name: 'ბათუმი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_guriatv.png',
        name: 'გურია TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },


    {
        icon: './images/channels/tv_stereoplus.png',
        name: 'სტერეო+',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_toktv.png',
        name: 'TOK TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_chadrakitv.png',
        name: 'ჭადრაკი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_kartuliarkhi.png',
        name: 'ქართული არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/girchi.png',
        name: 'გირჩი TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_argotv.png',
        name: 'არგო TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_gmtv.png',
        name: 'GMTV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/greentv.png',
        name: 'Green TV - ჩხენკელი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/meteo.png',
        name: 'Meteo 24',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/odishi.png',
        name: 'ოდიში TV',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_tanamgzavri.png',
        name: 'თანამგზავრი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/georgianTimes.png',
        name: 'ჯორჯიან თაიმსი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/altinfo.png',
        name: 'ალტ-ინფო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    // {
    //     icon: './images/channels/tv_erimedia.png',
    //     name: 'ერი მედია',
    //     isFaded: false,
    //     isBasePack: true,
    //     tv: `${tv}`,
    //     desktop: `${desktop}`,
    //     mobile: `${mobile}`
    // },

    {
        icon: './images/channels/tv_tv5geo.png',
        name: 'მეხუთე არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_agrogaremo.png',
        name: 'აგროგარემო',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_drotv.png',
        name: 'სამეფო არხი',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/abkhazia.png',
        name: 'აფხაზეთის ხმა',
        isFaded: false,
        isBasePack: true,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

    {
        icon: './images/channels/tv_monitoring.png',
        name: 'TV Monitoring',
        isFaded: false,
        isBasePack: false,
        tv: `${tv}`,
        desktop: `${desktop}`,
        mobile: `${mobile}`
    },

]


const channelsModal = document.getElementById('channelsModal')
const closeIcon = document.getElementById('closeIcon')
const packageName1 = document.querySelector(".packageName1")
const packageName2 = document.querySelector(".packageName2")
// const mainList = document.querySelector(".subscribe_prices_inner")
// const silkLIst = document.querySelector(".subscribe_prices_inner2")
const channelList = document.querySelector('.channel_list_inModal1')
const channelList2 = document.querySelector('.channel_list_inModal2')
const channelList3 = document.querySelector('.channel_list_inModal3')
const channelList4 = document.querySelector('.channel_list_inModal4')
const channelList5 = document.querySelector('.channel_list_inModal5')




window.onload = () => {
    
        setTimeout(() => {
            channelsModal.classList.remove('channels_modal_closed');
            channelsModal.classList.add('channels_modal_opened');
          }, 2000);
    
   
};



function modalHandler() {
    channelsModal.classList.add('channels_modal_closed');
}

closeIcon.addEventListener('click', modalHandler);

/////////////////////////////////
//უფასო პაკეტი
/////////////////////////////////
// channelsDB.forEach((channel) => {

//     //მთავარი დივი
//     const channelItem = document.createElement("div");
//     if(channel.isFaded === false){
//         channelItem.classList.add("channel_list_item")
//     }else{
//         channelItem.classList.add("channel_list_item_faded")
//     }
    
    
//     // სახელი და აიქონი
//     const nameCover = document.createElement("div")
//     nameCover.classList.add("channel_item_name_cover")
//     // სახელი
//     const nameP = document.createElement("p")
//     nameP.textContent = channel.name

//     //ქოვერი
//     const coverImg = document.createElement("img") 
//     coverImg.setAttribute("src", channel.icon);
//     coverImg.setAttribute("alt", "");
//     coverImg.classList.add('channel_icon')

//     nameCover.appendChild(coverImg)
//     nameCover.appendChild(nameP)
//     channelItem.appendChild(nameCover)


//     ////////////////////////////////////////////////////
//     //თავსებადობის აიქონები
//     const devicesDiv = document.createElement("div")
//     devicesDiv.classList.add("channel_item_devices")
    
//     const tvImg = document.createElement("img")
//     tvImg.setAttribute("src", channel.tv);
//     tvImg.setAttribute("alt", "channel icon");


//     const deviceBlock1 = document.createElement("div")
//     deviceBlock1.classList.add("device_little_block")
//     if(channel.tv !== ''){
//         deviceBlock1.appendChild(tvImg)
//     }

//     const deviceBlock2 = document.createElement("div")
//     deviceBlock2.classList.add("device_little_block")
//     const desktopImg = document.createElement("img")
//     desktopImg.setAttribute("src", channel.desktop);
//     desktopImg.setAttribute("alt", "channel icon");
//     if(channel.desktop !== ''){
//         deviceBlock2.appendChild(desktopImg)
//     }

//     const deviceBlock3 = document.createElement("div")
//     deviceBlock3.classList.add("device_little_block")
//     const mobileImg = document.createElement("img")
//     mobileImg.setAttribute("src", channel.mobile);
//     mobileImg.setAttribute("alt", "channel icon");
//     if(channel.desktop !== ''){
//         deviceBlock3.appendChild(mobileImg)
//     }

//     const outterDiv = document.createElement("div")
//     outterDiv.classList.add('item_outter')

//     devicesDiv.appendChild(deviceBlock1)
//     devicesDiv.appendChild(deviceBlock2)
//     devicesDiv.appendChild(deviceBlock3)
//     channelItem.appendChild(devicesDiv)
//     outterDiv.appendChild(channelItem)
//     channelList.appendChild(outterDiv)
// });

/////////////////////////////////
//ქართული არხენო
/////////////////////////////////
channelsDB.forEach((channel) => {

    //მთავარი დივი
    const channelItem = document.createElement("div");
    if(channel.isBasePack === true){
        channelItem.classList.add("channel_list_item")
    }else{
        channelItem.classList.add("channel_list_item_faded")
    }
    
    
    // სახელი და აიქონი
    const nameCover = document.createElement("div")
    nameCover.classList.add("channel_item_name_cover")
    // სახელი
    const nameP = document.createElement("p")
    nameP.textContent = channel.name

    //ქოვერი
    const coverImg = document.createElement("img") 
    coverImg.setAttribute("src", channel.icon);
    coverImg.setAttribute("alt", "");
    coverImg.classList.add('channel_icon')

    nameCover.appendChild(coverImg)
    nameCover.appendChild(nameP)
    channelItem.appendChild(nameCover)


    ////////////////////////////////////////////////////
    //თავსებადობის აიქონები
    const devicesDiv = document.createElement("div")
    devicesDiv.classList.add("channel_item_devices")
    
    const tvImg = document.createElement("img")
    tvImg.setAttribute("src", channel.tv);
    tvImg.setAttribute("alt", "channel icon");


    const deviceBlock1 = document.createElement("div")
    deviceBlock1.classList.add("device_little_block")
    if(channel.tv !== ''){
        deviceBlock1.appendChild(tvImg)
    }

    const deviceBlock2 = document.createElement("div")
    deviceBlock2.classList.add("device_little_block")
    const desktopImg = document.createElement("img")
    desktopImg.setAttribute("src", channel.desktop);
    desktopImg.setAttribute("alt", "channel icon");
    if(channel.desktop !== ''){
        deviceBlock2.appendChild(desktopImg)
    }

    const deviceBlock3 = document.createElement("div")
    deviceBlock3.classList.add("device_little_block")
    const mobileImg = document.createElement("img")
    mobileImg.setAttribute("src", channel.mobile);
    mobileImg.setAttribute("alt", "channel icon");
    if(channel.desktop !== ''){
        deviceBlock3.appendChild(mobileImg)
    }

    const outterDiv = document.createElement("div")
    outterDiv.classList.add('item_outter')

    devicesDiv.appendChild(deviceBlock1)
    devicesDiv.appendChild(deviceBlock2)
    devicesDiv.appendChild(deviceBlock3)
    channelItem.appendChild(devicesDiv)
    outterDiv.appendChild(channelItem)
    channelList2.appendChild(outterDiv)
});

/////////////////////////////////
//ულტრა პაკეტი
/////////////////////////////////
channelsDB.forEach((channel) => {

    //მთავარი დივი
    const channelItem = document.createElement("div");
    channelItem.classList.add("channel_list_item")

    // სახელი და აიქონი
    const nameCover = document.createElement("div")
    nameCover.classList.add("channel_item_name_cover")
    // სახელი
    const nameP = document.createElement("p")
    nameP.textContent = channel.name

    //ქოვერი
    const coverImg = document.createElement("img") 
    coverImg.setAttribute("src", channel.icon);
    coverImg.setAttribute("alt", "");
    coverImg.classList.add('channel_icon')

    nameCover.appendChild(coverImg)
    nameCover.appendChild(nameP)
    channelItem.appendChild(nameCover)


    ////////////////////////////////////////////////////
    //თავსებადობის აიქონები
    const devicesDiv = document.createElement("div")
    devicesDiv.classList.add("channel_item_devices")
    
    const tvImg = document.createElement("img")
    tvImg.setAttribute("src", channel.tv);
    tvImg.setAttribute("alt", "channel icon");


    const deviceBlock1 = document.createElement("div")
    deviceBlock1.classList.add("device_little_block")
    if(channel.tv !== ''){
        deviceBlock1.appendChild(tvImg)
    }

    const deviceBlock2 = document.createElement("div")
    deviceBlock2.classList.add("device_little_block")
    const desktopImg = document.createElement("img")
    desktopImg.setAttribute("src", channel.desktop);
    desktopImg.setAttribute("alt", "channel icon");
    if(channel.desktop !== ''){
        deviceBlock2.appendChild(desktopImg)
    }

    const deviceBlock3 = document.createElement("div")
    deviceBlock3.classList.add("device_little_block")
    const mobileImg = document.createElement("img")
    mobileImg.setAttribute("src", channel.mobile);
    mobileImg.setAttribute("alt", "channel icon");
    if(channel.desktop !== ''){
        deviceBlock3.appendChild(mobileImg)
    }

    const outterDiv = document.createElement("div")
    outterDiv.classList.add('item_outter')

    devicesDiv.appendChild(deviceBlock1)
    devicesDiv.appendChild(deviceBlock2)
    devicesDiv.appendChild(deviceBlock3)
    channelItem.appendChild(devicesDiv)
    outterDiv.appendChild(channelItem)
    channelList3.appendChild(outterDiv)
});

/////////////////////////////////
//უცხოეთი პაკეტი
/////////////////////////////////
abroadChannelsDB.forEach((channel) => {

    //მთავარი დივი
    const channelItem = document.createElement("div");
    if(channel.isFaded === false){
        channelItem.classList.add("channel_list_item")
    }else{
        channelItem.classList.add("channel_list_item_faded")
    }

    // სახელი და აიქონი
    const nameCover = document.createElement("div")
    nameCover.classList.add("channel_item_name_cover")
    // სახელი
    const nameP = document.createElement("p")
    nameP.textContent = channel.name

    //ქოვერი
    const coverImg = document.createElement("img") 
    coverImg.setAttribute("src", channel.icon);
    coverImg.setAttribute("alt", "");
    coverImg.classList.add('channel_icon')

    nameCover.appendChild(coverImg)
    nameCover.appendChild(nameP)
    channelItem.appendChild(nameCover)


    ////////////////////////////////////////////////////
    //თავსებადობის აიქონები
    const devicesDiv = document.createElement("div")
    devicesDiv.classList.add("channel_item_devices")
    
    const tvImg = document.createElement("img")
    tvImg.setAttribute("src", channel.tv);
    tvImg.setAttribute("alt", "channel icon");


    const deviceBlock1 = document.createElement("div")
    deviceBlock1.classList.add("device_little_block")
    if(channel.tv !== ''){
        deviceBlock1.appendChild(tvImg)
    }

    const deviceBlock2 = document.createElement("div")
    deviceBlock2.classList.add("device_little_block")
    const desktopImg = document.createElement("img")
    desktopImg.setAttribute("src", channel.desktop);
    desktopImg.setAttribute("alt", "channel icon");
    if(channel.desktop !== ''){
        deviceBlock2.appendChild(desktopImg)
    }

    const deviceBlock3 = document.createElement("div")
    deviceBlock3.classList.add("device_little_block")
    const mobileImg = document.createElement("img")
    mobileImg.setAttribute("src", channel.mobile);
    mobileImg.setAttribute("alt", "channel icon");
    if(channel.desktop !== ''){
        deviceBlock3.appendChild(mobileImg)
    }

    const outterDiv = document.createElement("div")
    outterDiv.classList.add('item_outter')

    devicesDiv.appendChild(deviceBlock1)
    devicesDiv.appendChild(deviceBlock2)
    devicesDiv.appendChild(deviceBlock3)
    channelItem.appendChild(devicesDiv)
    outterDiv.appendChild(channelItem)
    channelList4.appendChild(outterDiv)
});

