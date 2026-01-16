import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "Vùng đất bị quên lãng",
        "overview": "Một nữ hoàng cử pháp sư quyền năng và đáng sợ Grey Alys đến vùng hoang dã ma quái của Vùng Đất Bị Quên Lãng để tìm kiếm một sức mạnh ma thuật. Tại đó, cô cùng người dẫn đường, kẻ lang thang Boyce, phải đấu trí và chiến đấu với cả con người lẫn ác quỷ.",
        "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "genres": [
            { "id": 28, "name": "Hành động" },
            { "id": 14, "name": "Giả tưởng" },
            { "id": 12, "name": "Phiêu lưu" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-27",
        "original_language": "en",
        "tagline": "Cô ấy tìm kiếm sức mạnh để giải phóng dân tộc mình.",
        "vote_average": 6.4,
        "vote_count": 15000,
        "runtime": 102,
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Until Dawn (Cho Đến Bình Minh)",
        "overview": "Một năm sau khi em gái Melanie biến mất một cách bí ẩn, Clover và nhóm bạn tiến vào thung lũng hẻo lánh nơi cô ấy mất tích để tìm câu trả lời. Khi khám phá một trung tâm du khách bị bỏ hoang, họ bị một kẻ sát nhân đeo mặt nạ rình rập và sát hại dã man từng người một... chỉ để rồi tỉnh dậy và thấy mình quay lại thời điểm bắt đầu của buổi tối hôm đó.",
        "poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "genres": [
            { "id": 27, "name": "Kinh dị" },
            { "id": 9648, "name": "Bí ẩn" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-23",
        "original_language": "en",
        "tagline": "Mỗi đêm là một cơn ác mộng khác nhau.",
        "vote_average": 6.405,
        "vote_count": 18000,
        "runtime": 103,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Lilo & Stitch",
        "overview": "Câu chuyện cực kỳ hài hước và cảm động về một cô bé Hawaii cô đơn và người ngoài hành tinh trốn chạy, người đã giúp hàn gắn gia đình tan vỡ của cô bé.",
        "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "genres": [
            { "id": 10751, "name": "Gia đình" },
            { "id": 35, "name": "Hài" },
            { "id": 878, "name": "Khoa học viễn tưởng" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Giữ chặt mấy trái dừa nhé.",
        "vote_average": 7.117,
        "vote_count": 27500,
        "runtime": 108,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Havoc (Hỗn Loạn)",
        "overview": "Khi một vụ cướp ma túy đi chệch hướng ngoài tầm kiểm soát, một cảnh sát chán đời phải chiến đấu xuyên qua thế giới ngầm tội phạm của một thành phố thối nát để cứu con trai của một chính trị gia.",
        "poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        "genres": [
            { "id": 28, "name": "Hành động" },
            { "id": 80, "name": "Tội phạm" },
            { "id": 53, "name": "Giật gân" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-25",
        "original_language": "en",
        "tagline": "Không luật pháp. Chỉ có hỗn loạn.",
        "vote_average": 6.537,
        "vote_count": 35960,
        "runtime": 107,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "A Minecraft Movie (Phim Minecraft)",
        "overview": "Bốn kẻ lạc loài đang vật lộn với những vấn đề thường ngày thì bất ngờ bị hút qua một cánh cổng bí ẩn vào Overworld: một xứ sở thần tiên hình khối kỳ quái phát triển nhờ trí tưởng tượng. Để trở về nhà, họ phải làm chủ thế giới này đồng thời dấn thân vào một nhiệm vụ kỳ diệu với một thợ chế tạo chuyên nghiệp đầy bất ngờ, Steve.",
        "poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "genres": [
            { "id": 10751, "name": "Gia đình" },
            { "id": 35, "name": "Hài" },
            { "id": 12, "name": "Phiêu lưu" },
            { "id": 14, "name": "Giả tưởng" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-31",
        "original_language": "en",
        "tagline": "Có mặt hoặc làm khối vuông.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 101,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Mission: Impossible - The Final Reckoning (Nhiệm Vụ Bất Khả Thi: Nghiệp Báo Cuối Cùng)",
        "overview": "Ethan Hunt và đồng đội tiếp tục tìm kiếm AI đáng sợ được gọi là Thực Thể — thứ đã xâm nhập vào các mạng lưới tình báo trên toàn cầu — trong khi bị các chính phủ trên thế giới và một bóng ma bí ẩn trong quá khứ của Hunt truy đuổi. Cùng với những đồng minh mới và được trang bị phương tiện để tắt Thực Thể mãi mãi, Hunt chạy đua với thời gian để ngăn chặn thế giới mà chúng ta biết bị thay đổi vĩnh viễn.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genres": [
            { "id": 28, "name": "Hành động" },
            { "id": 12, "name": "Phiêu lưu" },
            { "id": 53, "name": "Giật gân" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Cuộc đời chúng ta là tổng hòa của những lựa chọn.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Thunderbolts*",
        "overview": "Sau khi nhận ra mình bị mắc bẫy trong một cái bẫy chết người, bảy kẻ bị ruồng bỏ và vỡ mộng phải dấn thân vào một nhiệm vụ nguy hiểm buộc họ phải đối mặt với những góc khuất đen tối nhất trong quá khứ của chính mình.",
        "poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genres": [
            { "id": 28, "name": "Hành động" },
            { "id": 878, "name": "Khoa học viễn tưởng" },
            { "id": 12, "name": "Phiêu lưu" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Ai cũng xứng đáng có cơ hội thứ hai.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    }
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 15170000, // Đã đổi sang 15.170.000 VND
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 60000, // Giá vé: 60.000đ
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 85000, // Giá vé: 85.000đ
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 85000, // Giá vé: 85.000đ
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 85000, // Giá vé: 85.000đ
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 50000, // Giá vé: 50.000đ
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 80000, // Giá vé: 80.000đ
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "VDT", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 50000, // Giá vé 50k
        },
        "amount": 100000, // 2 ghế * 50k = 100k
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "VDT", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 50000,
        },
        "amount": 50000, // 1 ghế * 50k = 50k
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "VDT", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 50000,
        },
        "amount": 150000, // 3 ghế * 50k = 150k
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]