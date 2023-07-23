type TUrlThumb = {
    url: string[],
    title: string[],
    thumb: string[]
};

type TYoutubeLinks = {

    iced: TUrlThumb,
    lol: TUrlThumb,
    musica: {
        covers: TUrlThumb,
        lyrics: TUrlThumb,
        touhou: TUrlThumb
    },
    osu: {
        config: TUrlThumb,
        init: TUrlThumb,
        recop: TUrlThumb,
        review: TUrlThumb,
        xpress: TUrlThumb,
    },
    sketchs: TUrlThumb,
    tutorials: {
        info: TUrlThumb,
        misc: TUrlThumb,
        multimedia: TUrlThumb,
        rubik: TUrlThumb
    }
};

export const urlThumbs = (thumb: string): string => {
    return new URL(`/src/modules/youtube/assets/thumbs/${thumb}.jpg`, import.meta.url).href
}

export const urlCovers = (thumb: string): string => {
    return new URL(`/src/modules/youtube/assets/${thumb}.jpg`, import.meta.url).href
}