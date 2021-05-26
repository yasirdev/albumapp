export interface UserItemModel {
    id: number,
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export interface AlbumItemProps {
    albumId: number,
    id: number,
    title: string
    url: string
    thumbnailUrl: string,
    index?: number
}

export interface PhotoItemProps {
    albumId: number,
    id: number,
    title: string
    url: string
    thumbnailUrl: string
}
