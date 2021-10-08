import BAISCHOLLOW from '../../assets/Basic_hollow.jpg'
import BOXY_CARDIGAN from '../../assets/BOXY_CARDIGAN.jpg'
import Charming_red from '../../assets/Charming_red.jpg'
import Cowl_Neck from '../../assets/Cowl_Neck.jpg'
import DOROTHY_PERKINS from '../../assets/DOROTHY_PERKINS.jpg'
import Flounce_High from '../../assets/Flounce_High.jpg'
export interface Products {
    id: number,
    title: string,
    img: string,
    price: number,
    desc: string
}
export const initialProduct: Products[] = [
    {
        id: 0,
        title: "shirt",
        img: BAISCHOLLOW,
        price: 45,
        desc: "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations"
    },
    {
        id: 1,
        title: "skit",
        img: BOXY_CARDIGAN,
        price: 25,
        desc: "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations"
    },
    {
        id: 2,
        title: "shirt",
        img: Charming_red,
        price: 5,
        desc: "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations"
    },
    {
        id: 3,
        title: "Cowl Neck",
        img: Cowl_Neck,
        price: 88,
        desc: "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations"
    },
    {
        id: 4,
        title: "Shirt",
        img: DOROTHY_PERKINS,
        price: 8,
        desc: "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations"
    },
    {
        id: 5,
        title: "Flounce_High",
        img: Flounce_High,
        price: 5,
        desc: "Ross-Simons jewelry arrives beautifully packaged in a gift box, ready to delight for any occasion, including birthdays, Christmas,Mother’s Day, anniversaries, Valentine’s Day, weddings, graduationsand much more! Due to the naturally occurring characteristics of diamonds, each is uniqueand may exhibit imperfections such as inclusions, blemishes and cloudiness, as well as color variations"
    },
]