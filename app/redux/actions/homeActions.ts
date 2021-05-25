import { ON_SUCCESS_ALBUMS } from "../types"

export const updateAlbums = (data: Array<any>) => {
    return {
        type: ON_SUCCESS_ALBUMS,
        payload: data
    }
}