const products = [
    {
        id: 1,
        title: "아이패드 프로 11인치",
        price: 850000,
        category: "전자기기",
        isSold: false,
        favoriteCount: 12,
        uploadedDaysAgo: 2,
        sellerRating: 4.8
    },
    {
        id: 2,
        title: "가죽 소파 3인용",
        price: 320000,
        category: "가구/인테리어",
        isSold: true,
        favoriteCount: 5,
        uploadedDaysAgo: 15,
        sellerRating: 4.2
    },
    {
        id: 3,
        title: "나이키 에어포스1",
        price: 65000,
        category: "의류/잡화",
        isSold: false,
        favoriteCount: 8,
        uploadedDaysAgo: 1,
        sellerRating: 4.9
    },
    {
        id: 4,
        title: "다이슨 청소기",
        price: 280000,
        category: "가전제품",
        isSold: false,
        favoriteCount: 20,
        uploadedDaysAgo: 4,
        sellerRating: 4.7
    },
    {
        id: 5,
        title: "루이까또즈 가방",
        price: 95000,
        category: "의류/잡화",
        isSold: true,
        favoriteCount: 3,
        uploadedDaysAgo: 22,
        sellerRating: 3.9
    },
    {
        id: 6,
        title: "책상 겸용 스탠딩 데스크",
        price: 150000,
        category: "가구/인테리어",
        isSold: false,
        favoriteCount: 14,
        uploadedDaysAgo: 6,
        sellerRating: 4.5
    },
    {
        id: 7,
        title: "닌텐도 스위치",
        price: 220000,
        category: "전자기기",
        isSold: false,
        favoriteCount: 31,
        uploadedDaysAgo: 0,
        sellerRating: 4.6
    },
    {
        id: 8,
        title: "전기밥솥 쿠쿠",
        price: 90000,
        category: "가전제품",
        isSold: true,
        favoriteCount: 2,
        uploadedDaysAgo: 30,
        sellerRating: 4.0
    },
    {
        id: 9,
        title: "골프채 풀세트",
        price: 480000,
        category: "스포츠/레저",
        isSold: false,
        favoriteCount: 9,
        uploadedDaysAgo: 3,
        sellerRating: 4.3
    },
    {
        id: 10,
        title: "캠핑 텐트 4인용",
        price: 130000,
        category: "스포츠/레저",
        isSold: false,
        favoriteCount: 17,
        uploadedDaysAgo: 5,
        sellerRating: 4.8
    },
];
// ------------------------------------ Filter ------------------------------------

// 1. 현재 **판매중인** (`isSold`가 `false`인) 상품만 걸러낸 새 배열을 만들어보세요.
const sellingProducts = products.filter(product => product.isSold === false);
console.log(sellingProducts);

// 2. "전자기기"` 카테고리에 해당하는 상품만 걸러낸 새 배열을 만들어보세요.
const electronics = products.filter(product => product.category === "전자기기");
console.log(electronics);

// 3. **판매중**이면서 **찜(favoriteCount)이 10개 이상**인 상품만 걸러낸 새 배열을 만들어보세요.
const popularSoldProducts = products.filter(product => product.isSold === false && product.favoriteCount >= 10);
console.log(popularSoldProducts);

// ------------------------------------ Map ------------------------------------
// 4. 모든 상품의 **제목(title)만** 추출한 새 배열을 만들어보세요.
const productsTitles = products.map(product => product.title);
console.log(productsTitles);

// 5. 모든 상품의 `price`에 **판매 수수료 5%를 더한 가격**을 담은 새 배열을 만들어보세요.
// (숫자만 담긴 배열이면 됩니다)
const productsNewPrice = products.map(product => product.price * 1.05);
console.log(productsNewPrice);

// 6. 각 상품을 `{ 제목: title, 상태: "판매중" 또는 "판매완료" }` 형태의 **새로운 객체**로 변환한 배열을 만들어보세요.
// (`isSold` 값에 따라 상태 문자열이 달라져야 합니다)
const productsSoldStatus = products.map(product => ({
    제목: product.title,
    상태: product.isSold ? "판매완료" : "판매중"
}));
console.log(productsSoldStatus);

// ------------------------------------ Reduce ------------------------------------
// 7. 전체 상품의 `favoriteCount`(찜 개수)를 모두 더한 **총합**을 구해보세요.
const totalFavCount = products.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.favoriteCount;
}, 0);
console.log("총 찜 개수: " + totalFavCount);

// 8. 전체 상품 중 **가장 비싼 상품의 가격**을 `reduce`로 구해보세요. (`Math.max`는 사용하지 말고, `reduce`의 비교 로직으로 직접 구현해보세요)
const mostExpProduct = products.reduce((previousValue, currentValue) => {
    return previousValue > currentValue.price ? previousValue : currentValue.price;
}, 0)
console.log(mostExpProduct);

// ------------------------------------ 조합 ------------------------------------
// 9. "가구/인테리어"` 카테고리에 속하면서 **판매중인** 상품들의 **가격 총합**을 구해보세요.
const interiorProductsTotalPrice = products
    .filter(product => product.category === "가구/인테리어" && product.isSold === false)
    .reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
console.log(interiorProductsTotalPrice);

// 10.
// I. `id`가 `4`인 상품을 `find`로 찾아서, 그 상품의 `category` 값을 확인합니다.
// II. 방금 찾은 카테고리와 **같은 카테고리**에 속하면서, **판매중인** 상품들만 `filter`로 걸러냅니다.
// III. 걸러진 상품들의 **제목만** `map`으로 뽑아서 최종 배열로 반환합니다.

const filterCatagory = products
    .find(product => product.id === 4).category;
const resultProductTitle = products
    .filter(product => product.category === filterCatagory)
    .map(product => product.title);

console.log(filterCatagory);
console.log(resultProductTitle);