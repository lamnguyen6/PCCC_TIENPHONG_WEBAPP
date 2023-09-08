import { Injectable } from '@angular/core';
import { Product, ProductCard } from './product';
interface SideMenuItem {
    id: any;
    name: any;
    group: string;
    groupName: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private PRODUCTS: Array<Product> = [
    {
        id: 'binh-chua-chay-bot',
        name: 'Bình chữa cháy bột',
        images: [
            '/assets/images/products/binh-chua-chay-bot/binh-bot-pccc-bc-mfz35_pccc-ha-noi.png',
            '/assets/images/products/binh-chua-chay-bot/binh-chua-chay-tomoken-xach-tay-bot-abc-4kg.png',
            '/assets/images/products/binh-chua-chay-bot/binh-chua-chay-tomoken-xach-tay-bot-abc-6kg.png',
            '/assets/images/products/binh-chua-chay-bot/binh-chua-chay-tomoken-xach-tay-bot-abc-8kg.png',
            '/assets/images/products/binh-chua-chay-bot/binh-chua-chay-tomoken-xach-tay-bot-abc-9kg.png',
            '/assets/images/products/binh-chua-chay-bot/binh-chua-chay-tomoken-xach-tay-bot-abc-35kg.png',
        ],
        categories: 'binh-chua-chay-bot',
        tags: ['binh-chua-chay-bot', 'binh-chua-chay', 'thiet-bi-pccc'],
        info: `
            <p>Bình chữa cháy Tomoken xách tay loại bột ABC là loại bình được sản xuất bởi công nghệ Nhật Bản. Sản phẩm được kiểm soát nghiêm ngặt về chất lượng, áp lực và năng lực chữa cháy tuyệt vời.</p>
            <p><b>Loại: Xách tay 4/6/8/9/35 kg</b></p>
        `,
        description: `
            <p>Trọng lượng: 4/6/8/9/35 (kg)</p>
            <p>Bảo hành: 12 tháng</p>
            <p>Xuất xứ: Việt Nam và Trung Quốc</p>
        `,
        specifications: ''
    },
    {
        id: 'binh-chua-chay-co2',
        name: 'Bình chữa cháy CO2',
        images: [
            '/assets/images/products/binh-chua-chay-co2/binh-chua-chay-tomoken-xach-tay-co2-3kg.png',
            '/assets/images/products/binh-chua-chay-co2/binh-chua-chay-tomoken-xach-tay-co2-5kg.png',
            '/assets/images/products/binh-chua-chay-co2/binh-cuu-hoa-khi-co2-mt5_pccc-ha-noi.png',
            '/assets/images/products/binh-chua-chay-co2/binh-cuu-hoa-khi-co2-mt24.png',
        ],
        categories: 'binh-chua-chay-co2',
        tags: ['binh-chua-chay-co2', 'binh-chua-chay', 'thiet-bi-pccc'],
        description: `
            <p>Trọng lượng: 3/5/24 (kg)</p>
            <p>Bảo hành: 12 tháng</p>
            <p>Xuất xứ: Việt Nam và Trung Quốc</p>
        `,
        specifications: ''
    },
    {
        id: 'bo-tieu-lenh',
        name: 'Bộ tiêu lệnh',
        images: [
            '/assets/images/products/bo-tieu-lenh/bo-tieu-lenh.png',
        ],
        categories: 'bo-tieu-lenh',
        tags: ['bo-tieu-lenh', 'thiet-bi-pccc'],
        description: `
            <p>Bộ tiêu lệnh chữa cháy sẽ là người bạn đồng hành không thể thiếu trong hoạt động tuyên truyền PCCC trong hộ gia đình, người dân, công ty, xí nghiệp</p>
            <p>Chất liệu: nhôm chống gỉ</p>
            <p>Xuất xứ: Việt Nam</p>
            <ol start="1">Nội dung: 
            <li>Nội quy.</li>
            <li>Tiêu lệnh.</li>
            <li>Cấm hút thuốc.</li>
            <li>Cấm lửa.</li></ol>
        `,
        specifications: ''
    },
    {
        id: 'den-thoat-hiem',
        name: 'Đèn sự cố thoát hiểm',
        images: [
            '/assets/images/products/den-thoat-hiem/Den-su-co-thoat-hiem-khan-cap-cao-cap-Lilang-XA-ZAZD-E3WA.png',
            '/assets/images/products/den-thoat-hiem/Den-su-co-thoat-hiem-khan-cap-Lilang-XF-ZFZD-E3WA-1.png',
            '/assets/images/products/den-thoat-hiem/den-su-co-thoat-hiem-paragon-PEMA21SW-kich-thuoc.png',
            '/assets/images/products/den-thoat-hiem/den-su-co-thoat-hiem-paragon-PEMB21SW.png',
            '/assets/images/products/den-thoat-hiem/den-su-co-thoat-hiem-paragon-PEMC22SW-1.png',
            '/assets/images/products/den-thoat-hiem/den-su-co-thoat-hiem-song-ngu-lilang-XF-ZFZD-E3WB.png',
        ],
        categories: 'den-thoat-hiem',
        tags: ['den-thoat-hiem', 'thiet-bi-pccc'],
        description: `
            <p>Đèn sự cố thoát hiểm của công ty PCCC Tiên Phong được thiết kế gọn nhẹ, có khả năng tự động chiếu sáng khẩn cấp khi gặp sự cố mất điện đột ngột, giúp ta định hướng lối đi, đường thoát hiểm tại các tòa nhà chung cư, văn phòng, trường học, kho, xưởng</p>
        `,
        specifications: `
            <ul>
                <li><span>Điện áp nguồn vào</span><span>AC 220V, 50Hz</span></li>
                <li><span>Nguồn ánh sáng</span><span>Sử dụng đèn LEDs siêu sáng</span></li>
                <li><span>Cường độ sáng</span><span>≥50cd/m2</span></li>
                <li><span>Điện năng tiêu thụ</span><span>5 Watt</span></li>
                <li><span>Thời gian sáng</span><span>180 phút</span></li>
                <li><span>Thời gian chuyển sang chế độ khẩn cấp</span><span>1 giây</span></li>
                <li><span>NHiệt độ làm việc</span><span>-100C to +500C</span></li>
                <li><span>Sử dụng ắc quy</span><span>4V/3.0AH</span></li>
                <li><span>Cấp độ bảo vệ</span><span>IP30</span></li>
                <li><span>Kích thước</span><span>80mm x 280mm x 270mm</span></li>
            </ul>
        `
    },
    {
        id: 'den-tin-hieu-exit',
        name: 'Đèn tín hiệu EXIT',
        images: [
            '/assets/images/products/den-tin-hieu-exit/Den-chieu-sang-khan-cap-2-mat-chi-huong-len-lilang-XA-ZAZD-E3WA.png',
            '/assets/images/products/den-tin-hieu-exit/Den-chieu-sang-khan-cap-2-mat-chi-huong-xuong-lilang-XA-ZAZD-E3WA.png',
            '/assets/images/products/den-tin-hieu-exit/den-exit-lilang-1-mat-khong-chi-huong-XF-BLZD-2LREI-3WA.png',
            '/assets/images/products/den-tin-hieu-exit/den-exit-lilang-2-mat-co-chi-huong-XF-BLZD-2LREI-3WB.png',
            '/assets/images/products/den-tin-hieu-exit/den-exit-lilang-2-mat-khong-chi-huong-XF-BLZD-2LREI-3WB.png',
            '/assets/images/products/den-tin-hieu-exit/den-su-co-thoat-hiem-song-ngu-lilang-XF-ZFZD-E3WB.png',
        ],
        categories: 'den-tin-hieu-exit',
        tags: ['den-tin-hieu-exit', 'thiet-bi-pccc'],
        description: ``,
        specifications: `
            <ul>
                <li><span>Điện áp nguồn vào</span><span>AC 220V, 50Hz</span></li>
                <li><span>Nguồn ánh sáng</span><span>Sử dụng đèn LEDs siêu sáng</span></li>
                <li><span>Cường độ sáng</span><span>≥50cd/m2</span></li>
                <li><span>Điện năng tiêu thụ</span><span>3 Watt</span></li>
                <li><span>Thời gian sáng</span><span>120 phút</span></li>
                <li><span>Thời gian chuyển sang chế độ khẩn cấp</span><span>1 giây</span></li>
                <li><span>NHiệt độ làm việc</span><span>-100C to +500C</span></li>
                <li><span>Sử dụng pin khô</span><span>Ni-Cd 2*1.2V/800mAH</span></li>
                <li><span>Cấp độ bảo vệ</span><span>IP30</span></li>
                <li><span>Kích thước</span><span>20mm x 370mm x 200mm</span></li>
            </ul>
        `
    },
    {
        id: 'hop-cuu-hoa',
        name: 'Hộp cứu hỏa',
        images: [
            '/assets/images/products/hop-cuu-hoa/hop-cuu-hoa-1.png',
            '/assets/images/products/hop-cuu-hoa/hop-cuu-hoa-2.png',
            '/assets/images/products/hop-cuu-hoa/hop-cuu-hoa-3.png',
            '/assets/images/products/hop-cuu-hoa/hop-cuu-hoa-4.png',
        ],
        categories: 'hop-cuu-hoa',
        tags: ['hop-cuu-hoa', 'thiet-bi-pccc'],
        description: `
            <p>Hộp cứu hỏa là sản phẩm không thể thiếu cho công trình xây dựng, cơ quan xí nghiệp. Góp phần đem lại sự an toàn PCCC cho người sử dụng.</p>
            <p>Kích thước: 50x40x18 cm</p>
            <p>Chất liệu: Tôn chống gỉ</p>
            <p>Xuất xứ: Việt Nam</p>
            <p>Màu: Đỏ</p>
        `,
        specifications: ``
    },
    {
        id: 'may-bom-pccc',
        name: 'Máy bơm PCCC',
        images: [
            '/assets/images/products/may-bom-pccc/may-bom-pccc-ebara-FS_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-ebara-FSSA-100-80_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-hieu-pentax-CA32-160_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-hieu-tohatsu-V75FS_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-Hyundai-DHYC50LE_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-rabbit-p555-s_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-sealand-K150_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-shibaura-TF520MH_pccc-ha-noi.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-tohatsu-V20DS_pccc-ha-noi-0.png',
            '/assets/images/products/may-bom-pccc/may-bom-pccc-tohatsu-V85BS_pccc-ha-noi.png',
        ],
        categories: 'may-bom-pccc',
        tags: ['may-bom-pccc', 'thiet-bi-pccc'],
        description: `
            <p>Các sản phẩm máy bơm PCCC của công ty Tiên Phong được nhập khẩu nguyên chiếc từ Nhật Bản, sử dụng công nghệ bơm tiên tiến đem lại hiệu quả cao trong quá trình chữa cháy.</p>
        `,
        specifications: ``
    },
    {
        id: 'pisafe-bo-cam-bien-khoi',
        name: 'piSafe - Bộ cảm biến khói',
        images: [
            '/assets/images/products/pisafe-bo-cam-bien-khoi/Bo-cam-bien-khoi-1.png',
            '/assets/images/products/pisafe-bo-cam-bien-khoi/Bo-cam-bien-khoi-2.png',
        ],
        categories: 'pisafe-bo-cam-bien-khoi',
        tags: ['pisafe-bo-cam-bien-khoi', 'thiet-bi-pccc'],
        info: 'Cảm biến phát hiện cháy sửa dụng công nghệ khói quang giúp phát hiện cháy sớm để ngăn chặn và giảm thiểu thiệt hại các vụ cháy.',
        description: `
            <p>Cảm biến phát hiện cháy sửa dụng công nghệ khói quang giúp phát hiện cháy sớm để ngăn chặn và giảm thiểu thiệt hại các vụ cháy.</p>
            <p>Bộ cảm biến khói là thiết bị được sử dụng trong hệ thống cảnh báo cháy nhanh không dây. Do Công ty Cổ phần Pitagon – địa chỉ 139 đường Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành Phố Hà Nội – sản xuất hoàn toàn ở Việt Nam để thay thế các bộ sản phẩm cảnh báo cháy thông thường có dây như hiện nay.</p>
            <p>Ngày sản xuất: 29/09/2022</p>
            <p>Thông tin cảnh báo: Bộ cảm biến khói sẽ cảm ứng và phát hiện sớm nhất các sự cố trước khi cháy, đặc biệt là các môi trường nguy hiểm, nguy cơ thiệt hại rất cao và cần độ chính xác, nhanh chóng khi có hiện tượng cháy nổ. Thiết bị hỗ trợ đắc lực trong công tác phòng cháy chữa cháy, phù hợp với những những môi trường khắc nghiệt theo tiêu chuẩn của luật PCCC.</p>
            <p>Hướng dẫn sử dụng, hướng dẫn bảo quản: Quản lý sản phẩm trên ứng dụng piSafe. Bảo quản sản phẩm ở nơi thoáng mát, tránh ánh nắng mặt trời.</p>
        `,
        specifications: `
            <ul>
                <li><span>Công nghệ kết nối cảm biến</span><span>BLE 5.0 2.4Ghz</span></li>
                <li><span>Bộ vi xử lý</span><span>64 Mhz Cortex-M4 with FPU</span></li>
                <li><span>Bộ nhớ</span><span>192 KB Flash 24 KB RAM</span></li>
                <li><span>Phát hiện khói sớm</span><span>1.8%/ft±0.8%/ft EN14604</span></li>
                <li><span>Dòng tiêu thụ</span><span>≤25uA stanby, ≤30mA alarm</span></li>
                <li><span>Âm thanh cảnh báo</span><span>≥85dB</span></li>
                <li><span>Cảnh báo pin yếu</span><span>7V</span></li>
                <li><span>Phạm vi làm việc, cảnh báo</span><span>30m2 và lắp đặt cao ≥6m</span></li>
                <li><span>Nguồn cung cấp</span><span>Pin 6F22 9V</span></li>
                <li><span>Nhiệt độ, độ ẩm hoạt động</span><span>-100C ~ 600C, 0~95% không ngưng tụ</span></li>
                <li><span>Kích thước</span><span>105Φx60mm</span></li>
                <li><span>Khoảng cách kết nối</span><span>100 mét không vật cản</span></li>
                <li><span>Khả năng xuyên tường</span><span>60cm</span></li>
                <li><span>Trọng lượng</span><span>10gram</span></li>
                <li><span>Bảo hành</span><span>12 tháng</span></li>
            </ul>
        `
    },
    {
        id: 'pisafe-bo-cam-bien-lua',
        name: 'piSafe - Bộ cảm biến lửa',
        images: [
            '/assets/images/products/pisafe-bo-cam-bien-lua/Bo-cam-bien-lua-1.png',
            '/assets/images/products/pisafe-bo-cam-bien-lua/Bo-cam-bien-lua-2.png',
            '/assets/images/products/pisafe-bo-cam-bien-lua/Bo-cam-bien-lua-3.png',
        ],
        categories: 'pisafe-bo-cam-bien-lua',
        tags: ['pisafe-bo-cam-bien-lua', 'thiet-bi-pccc'],
        info: 'Cảm biến phát hiện cháy sửa dụng công nghệ đo nhiệt độ giúp phát hiện cháy để ngăn chặn và giảm thiểu thiệt hại các vụ cháy.',
        description: `
            <p>Cảm biến phát hiện cháy sửa dụng công nghệ đo nhiệt độ giúp phát hiện cháy để ngăn chặn và giảm thiểu thiệt hại các vụ cháy.</p>
            <p>Bộ cảm biến lửa là thiết bị được sử dụng trong hệ thống cảnh báo cháy nhanh không dây. Do Công ty Cổ phần Pitagon – địa chỉ 139 đường Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành Phố Hà Nội – sản xuất hoàn toàn ở Việt Nam để thay thế các bộ sản phẩm cảnh báo cháy thông thường có dây như hiện nay.</p>
            <p>Ngày sản xuất: 29/09/2022</p>
            <p>Thông tin cảnh báo: Bộ cảm biến lửa sẽ cảm ứng và phát hiện sớm nhất các sự cố trước khi cháy, đặc biệt là các môi trường nguy hiểm, nguy cơ thiệt hại rất cao và cần độ chính xác, nhanh chóng khi có hiện tượng cháy nổ: kho xăng dầu, kho đạn dược, nhà máy hóa dầu. Thiết bị hỗ trợ đắc lực trong công tác phòng cháy chữa cháy, phù hợp với những những môi trường khắc nghiệt theo tiêu chuẩn của luật PCCC.</p>
            <p>Hướng dẫn sử dụng, hướng dẫn bảo quản: Quản lý sản phẩm trên ứng dụng piSafe. Bảo quản sản phẩm ở nơi thoáng mát, tránh ánh nắng mặt trời.</p>
        `,
        specifications: `
            <ul>
                <li><span>Công nghệ kết nối cảm biến</span><span>BLE 5.0 2.4Ghz</span></li>
                <li><span>Bộ vi xử lý</span><span>64 Mhz Cortex-M4 with FPU</span></li>
                <li><span>Bộ nhớ</span><span>192 KB Flash 24 KB RAM</span></li>
                <li><span>Phát hiện cảnh báo</span><span>Phát hiện lửa sử dụng UV/IR2</span></li>
                <li><span>Dòng tiêu thụ</span><span>≤10mA@24VDC stanby, ≤30mA@24VDC alarm</span></li>
                <li><span>Phạm vi làm việc, cảnh báo</span><span>25 mét với góc quét 110⁰</span></li>
                <li><span>Nguồn cung cấp</span><span>Adapter 12/24V hoặc Pin mặt trời</span></li>
                <li><span>Nhiệt độ, độ ẩm hoạt động</span><span>-100C ~ 600C, 0~95% không ngưng tụ</span></li>
                <li><span>Kích thước</span><span>123Φx50mm, Option</span></li>
                <li><span>Khoảng cách kết nối</span><span>100 mét không vật cản</span></li>
                <li><span>Khả năng xuyên tường</span><span>60cm</span></li>
                <li><span>Trọng lượng</span><span>800gram</span></li>
                <li><span>Bảo hành</span><span>12 tháng</span></li>
            </ul>
        `
    },
    {
        id: 'pisafe-bo-cam-bien-nhiet',
        name: 'piSafe - Bộ cảm biến nhiệt',
        images: [
            '/assets/images/products/pisafe-bo-cam-bien-nhiet/Bo-cam-bien-nhiet-1.png',
            '/assets/images/products/pisafe-bo-cam-bien-nhiet/Bo-cam-bien-nhiet-2.png',
            '/assets/images/products/pisafe-bo-cam-bien-nhiet/Bo-cam-bien-nhiet-3.png',
            '/assets/images/products/pisafe-bo-cam-bien-nhiet/Bo-cam-bien-nhiet-4.png',
        ],
        categories: 'pisafe-bo-cam-bien-nhiet',
        tags: ['pisafe-bo-cam-bien-nhiet', 'thiet-bi-pccc'],
        info: 'Cảm biến phát hiện cháy sửa dụng công nghệ đo nhiệt độ giúp phát hiện cháy để ngăn chặn và giảm thiểu thiệt hại các vụ cháy.',
        description: `
            <p>Cảm biến phát hiện cháy sửa dụng công nghệ đo nhiệt độ giúp phát hiện cháy để ngăn chặn và giảm thiểu thiệt hại các vụ cháy.</p>
            <p>Bộ cảm biến nhiệt là thiết bị được sử dụng trong hệ thống cảnh báo cháy nhanh không dây. Do Công ty Cổ phần Pitagon – địa chỉ 139 đường Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành Phố Hà Nội – sản xuất hoàn toàn ở Việt Nam để thay thế các bộ sản phẩm cảnh báo cháy thông thường có dây như hiện nay.</p>
            <p>Ngày sản xuất: 29/09/2022</p>
            <p>Thông tin cảnh báo: Nhiệm vụ chính của Bộ cảm biến nhiệt là phản ứng nhanh dòng nhiệt lưu thông tại phạm vi vị trí đầu báo lắp đặt làm việc tới giá trị xác định về sẽ gửi tín hiệu về thiết bị trung tâm và được phát tín hiệu cảnh báo. Sản phẩm là thiết bị tích hợp cảm biến nhiệt độ tân tiến nhất sẽ đưa ra kết quả chính xác nhất và nhanh nhất.</p>
            <p>Hướng dẫn sử dụng, hướng dẫn bảo quản: Quản lý sản phẩm trên ứng dụng piSafe. Bảo quản sản phẩm ở nơi thoáng mát, tránh ánh nắng mặt trời.</p>
        `,
        specifications: `
            <ul>
                <li><span>Công nghệ kết nối cảm biến</span><span>BLE 5.0 2.4Ghz</span></li>
                <li><span>Bộ vi xử lý</span><span>64 Mhz Cortex-M4 with FPU</span></li>
                <li><span>Bộ nhớ</span><span>192 KB Flash 24 KB RAM</span></li>
                <li><span>Phát hiện cảnh báo nhiệt</span><span>≥570C hoặc tăng 70C trong 5s</span></li>
                <li><span>Dòng tiêu thụ</span><span>≤25uA stanby, ≤30mA alarm</span></li>
                <li><span>Âm thanh cảnh báo</span><span>≥85dB</span></li>
                <li><span>Cảnh báo pin yếu</span><span>7V</span></li>
                <li><span>Phạm vi làm việc, cảnh báo</span><span>60m2 và lắp đặt cao ≥6m</span></li>
                <li><span>Nguồn cung cấp</span><span>Pin 6F22 9V</span></li>
                <li><span>Nhiệt độ, độ ẩm hoạt động</span><span>-100C ~ 600C, 0~95% không ngưng tụ</span></li>
                <li><span>Kích thước</span><span>105Φx60mm</span></li>
                <li><span>Khoảng cách kết nối</span><span>100 mét không vật cản</span></li>
                <li><span>Khả năng xuyên tường</span><span>60cm</span></li>
                <li><span>Trọng lượng</span><span>10gram</span></li>
                <li><span>Bảo hành</span><span>12 tháng</span></li>
            </ul>
        `
    },
    {
        id: 'pisafe-home',
        name: 'piSafe Home',
        images: [
            '/assets/images/products/pisafe-home/PiSafe-Home-1.png',
        ],
        categories: 'pisafe-home',
        tags: ['pisafe-home', 'thiet-bi-pccc'],
        info: 'Sản phẩm được thiết kế đơn giản, tinh tế, gọn nhẹ, sử dụng nhựa ABS-PC chất lượng cao.',
        description: `
            <p>Sản phẩm được thiết kế đơn giản, tinh tế, gọn nhẹ, sử dụng nhựa ABS-PC chất lượng cao</p>
            <p>piSafe Home là sản phẩm thiết bị truyền tin cảnh báo cháy nhanh, được Công ty Cổ phần Pitagon – địa chỉ 139 đường Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành Phố Hà Nội – sản xuất hoàn toàn ở Việt Nam với mã Model là PISAFE-GW.</p>
            <p>Ngày sản xuất: 29/09/2022</p>
            <p>Thông tin cảnh báo: Sản phẩm được sử dụng trong các hệ thống cảnh báo khẩn cấp như: hệ thống cảnh báo cháy nhanh, hệ thống báo động trộm cướp, hệ thống y tế khẩn cấp</p>
            <p>Hướng dẫn sử dụng, hướng dẫn bảo quản: Quản lý sản phẩm trên ứng dụng piSafe. Bảo quản sản phẩm ở nơi thoáng mát, tránh ánh nắng mặt trời.</p>
            <p>Kết nối không dây với các thiết bị ngoại vi khác (báo nhiệt, báo lửa, báo khói, báo gas, báo trộm, camera an ninh, cảm biến môi trường….). Sản phẩm sử dụng công nghệ mesh network có khả năng mở rộng kết nối cảm biến không giới hạn số lượng, khoảng cách.</p>
            <p>Thiết bị sử dụng nguồn Adapter 5V/2A kèm pin dự phòng 2000mAh giúp thiết bị có thể duy trì kết nối khi mất nguồn điện tới 48h.</p>
            <p>Sử dụng băng tần viễn thông 4G kết nối server nên khả năng lắp đặt tương thích mọi địa điểm, công trình, không lo ngại bị cắt dây mạng hay đường truyền bị gián đoạn do tác động bên ngoài.</p>
            <p>Server hỗ trợ gọi điện và SMS tới cùng lúc 5-10 (có thể mở rộng hơn ) số điện thoại được lưu trong thiết bị, giúp đảm bảo chắc chắn thông báo sự cố tới những đơn vị quản lí và có trách nhiệm.</p>
        `,
        specifications: `
            <ul>
                <li><span>Công nghệ kết nối cảm biến</span><span>BLE 5.0 2.4Ghz</span></li>
                <li><span>Kết nối mạng</span><span>GSM/GPRS 850/900/1800/1900Mhz</span></li>
                <li><span>Bộ vi xử lý</span><span>64 Mhz Cortex-M4 with FPU</span></li>
                <li><span>Bộ nhớ</span><span>1MB Flash/256Kb Ram</span></li>
                <li><span>Nguồn cung cấp</span><span>Adapter 5V/2A có bảo vệ quá dòng quá áp</span></li>
                <li><span>Pin dự phòng</span><span>Lithium 3.7V 2000mAh</span></li>
                <li><span>Nhiệt độ, độ ẩm hoạt động</span><span>-100C ~ 600C, 0~95% không ngưng tụ</span></li>
                <li><span>Kích thước</span><span>100x100x38mm</span></li>
                <li><span>Trọng lượng</span><span>120gram</span></li>
                <li><span>Bảo hành</span><span>12 tháng</span></li>
            </ul>
        `
    },
    {
        id: 'pisafe-office',
        name: 'piSafe Office',
        images: [
            '/assets/images/products/pisafe-office/PiSafe-Office-1.png',
            '/assets/images/products/pisafe-office/PiSafe-Office-2.png',
            '/assets/images/products/pisafe-office/PiSafe-Office-3.png',
        ],
        categories: 'pisafe-office',
        tags: ['pisafe-office', 'thiet-bi-pccc'],
        info: 'Sản phẩm được thiết kế nhỏ gọn, tinh tế, sử dụng vỏ nhôm chống nhiễu từ trường chất lượng cao.',
        description: `
            <p>Sản phẩm được thiết kế nhỏ gọn, tinh tế, sử dụng vỏ nhôm chống nhiễu từ trường chất lượng cao.</p>
            <p>piSafe Office là sản phẩm thiết bị truyền tin cảnh báo cháy nhanh, được Công ty Cổ phần Pitagon – địa chỉ 139 đường Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành Phố Hà Nội – sản xuất hoàn toàn ở Việt Nam với mã Model là PISAFE-GW.</p>
            <p>Ngày sản xuất: 29/09/2022</p>
            <p>Thông tin cảnh báo: Thiết bị có khả năng nhận tín hiệu cảnh báo từ nhiều tủ đồng thời, khả năng kết nối với mọi loại tủ trên thị trường, có khả năng điều khiển các thiết bị lắp thêm như loa đèn cảnh báo, điều khiển bật tắt điện, thang máy…</p>
            <p>Hướng dẫn sử dụng, hướng dẫn bảo quản: Quản lý sản phẩm trên ứng dụng PiSafe. Bảo quản sản phẩm ở nơi thoáng mát, tránh ánh nắng mặt trời.</p>
            <p>Thiết bị sử dụng nguồn có sẵn trong tủ báo cháy, dải điện áp hoạt động đáp ứng mọi loại tủ có sẵn trên thị trường.</p>
            <p>Sử dụng băng tần viễn thông GSM/GPRS/4G kết nối server nên khả năng lắp đặt tương thích mọi địa điểm, công trình, không lo ngại bị cắt dây mạng hay đường truyền bị gián đoạn do tác động bên ngoài.</p>
            <p>Server hỗ trợ gọi điện và SMS tới cùng lúc 5-10 (có thể mở rộng hơn) số điện thoại được lưu trong thiết bị, giúp đảm bảo chắc chắn thông báo sự cố tới những đơn vị quản lí và có trách nhiệm</p>
        `,
        specifications: `
            <ul>
                <li><span>Kết nối mạng</span><span>GSM/GPRS 850/900/1800/1900Mhz hoặc 4G</span></li>
                <li><span>Bộ vi xử lý</span><span>72 Mhz Cortex-M3</span></li>
                <li><span>Bộ nhớ</span><span>384Kb Flash/64Kb Ram</span></li>
                <li><span>Nguồn cung cấp</span><span>9V ~ 48V có bảo vệ quá dòng quá áp, quá tải</span></li>
                <li><span>Pin dự phòng</span><span>Sử dụng nguồn dự phòng của tủ báo cháy</span></li>
                <li><span>Nhiệt độ, độ ẩm hoạt động</span><span>-100C ~ 600C, 0~95% không ngưng tụ</span></li>
                <li><span>Kích thước</span><span>90x57x23mm</span></li>
                <li><span>Trọng lượng</span><span>120gram</span></li>
                <li><span>Bảo hành</span><span>12 tháng</span></li>
            </ul>
        `
    },
    {
        id: 'quan-ao-bhld',
        name: 'Quần áo bảo hộ lao động',
        images: [
            '/assets/images/products/quan-ao-bhld/m12.png',
            '/assets/images/products/quan-ao-bhld/quan-ao-dep-net-9.png',
            '/assets/images/products/quan-ao-bhld/quan-ao-dep-net-10.png',
            '/assets/images/products/quan-ao-bhld/quan-ao-dep-net-15.png',
            '/assets/images/products/quan-ao-bhld/quan-ao-dep-net-19.png',
            '/assets/images/products/quan-ao-bhld/quan-ao-vai-2721-phoi-mau-2.png',
        ],
        categories: 'quan-ao-bhld',
        tags: ['quan-ao-bhld', 'thiet-bi-pccc'],
        info: '',
        description: `
            <p>Chất liệu: Vải Karim Hàn Quốc / vải bạt 100% cotton… hút ẩm tốt, thoáng mát, cầm màu tuyệt đối.</p>
            <p>Kiểu dáng: Đa dạng bao gồm dài tay, ngắn tay, các túi chức năng bố trí hợp lý trên quần áo</p>
            <p>Có thể nhận may thêm các chi tiết phản quang hoặc pha màu cách tân tạo nên sự chuyên nghiệp và nổi bật</p>
            <p>Kiểu quần áo thích hợp cho kỹ sư, nhân viên bảo trì, chuyên viên kỹ thuật, khối văn phòng, điều hành sản xuất, công nhân…</p>
            <p>Có thể may thêm logo công ty lên quần áo</p>
            <p>Cỡ: 5-8</p>
        `,
        specifications: ``
    },
  ];
  constructor() { }
  getProductById(id: string): any {
    const item = this.PRODUCTS.find(item => item.id === id);
    return id ? item : null;
  }
  getSideMenuList(): Array<SideMenuItem> {
    return this.PRODUCTS.sort((a: Product, b: Product) => {
        return this._sortproducts(a, b);
    }).map(({ id, name }) => ({ id, name, group: 'product', groupName: 'Sản phẩm' }));
  }
  searchProduct(phrase: string): Array<Product> {
    let list: Array<Product> = this.PRODUCTS.filter(item => {
        let joinTags = item.tags.join('+').toLowerCase().trim();
        return joinTags.includes(phrase.toLowerCase().trim());
    });
    if (list.length) {
        return list.sort((a: Product, b: Product) => {
            return this._sortproducts(a, b);
        });
    }
    return [];
  }
  private _sortproducts(a: Product, b: Product) {
    let greaterA = a.id.toLowerCase().includes('pisafe');
    let greaterB = b.id.toLowerCase().includes('pisafe');
    if (greaterA && !greaterB) return -1;
    if (!greaterA && greaterB) return 1;
    return 0;
  }
  _productcard(product: Product): ProductCard {
    return {
        id: product['id'],
        img: product['images'][0] || '',
        name: product['name'],
        categories: product['categories'],
        tags: product['tags'],
        badges: product['badges'] || [],
    };
  }
}
