import { Injectable } from '@angular/core';
import { SideMenuItem } from '../customer-services/customerServices.interface';
import { app } from '../share/app.utils';

@Injectable({
  providedIn: 'root'
})
export class HandbookService {
  private Handbooks: Array<any> = [
    {
      id: 'dia-chi-ban-thiet-bi-uy-tin',
      datetime: '',
      name: 'Cẩm nang PCCC',
      tags: ['dia-chi-ban-thiet-bi-pccc-uy-tin', 'tuyen-quang', 'cung-cap-thiet-bi', 'vat-tu-pccc'],
      content: `
        <h3>Địa chỉ bán thiết bị phòng cháy chữa cháy tại Tuyên Quang</h3>
        <p>Những thiết bị phòng cháy chữa cháy rất cần thiết cho hộ gia đình, cho công ty, nhà xưởng, chung cư cao tầng, trường học… Chúng là những thiết bị sinh ra có vai trò rất quan trọng chính là cảnh báo sự cố cháy nổ nghiêm trọng cho con người biết, thiết bị chữa cháy bao gồm bình chữa cháy, cuộn vòi chữa cháy…có mục đích dập tắc đám cháy mới phát sinh giảm nguy cơ thiệt hại về tài sản cũng như tính mạng của con người</p>
        <p><a href="https://pccctienphong.vn">PCCC Tiên Phong</a> chính là địa chỉ bán thiết bị phòng cháy chữa cháy uy tín chất lượng nhất tại Tuyên Quang và các tỉnh phía bắc, chúng tôi nhập khẩu chính hãng các thiết bị PCCC, khách hàng mua hàng tại đây sẽ được các chuyên viên tư vấn mọi thắc mắc, mua hàng nhanh chóng, giá cả hợp lý, nhận nhiều ưu đãi từ công ty chúng tôi</p>
        <p><b>Tầm quan trọng của thiết bị phòng cháy chữa cháy trong đời sống</b></p>
        <p>Cháy nổ ngày nay ngày càng xuất hiện nhiều, đặc biệt là mùa nắng nóng. Việc sử dụng các thiết bị PCCC trong đời sống con người sẽ hạn chế được các rủi ro tiềm ẩn cháy nổ xung quanh ta. Mỗi thiết bị cứu hỏa sẽ có những công dụng riêng để đảm nhận những nhiệm vụ với múc đích thông báo và dập tắt đám cháy ngay lập tức.</p>
        <p>Việc trang bị các thiết bị phòng cháy chữa cháy và nghiêm túc lắng nghe hướng dẫn, tập thực hành sử dụng các thiết bị phòng cháy chữa cháy là điều vô cùng quan trọng. Dưới đây là danh sách một số thiết bị phòng cháy chữa cháy cơ bản và cần thiết được các cơ quan chức năng khuyến cáo nên lắp đặt tại nhà, tại cửa hàng và các cơ quan làm việc của bạn:</p>
        <ul>
            <li>Đầu báo cháy</li>
            <li>Búa thoát hiểm</li>
            <li>Bình chữa cháy xử lý cháy ban đầu</li>
            <li>Bình dung phun bọt</li>
            <li>Mặt nạ chống cháy</li>
            <li>Thang dây inox</li>
            <li>Bộ thang dây thoát hiểm hạ chậm</li>
            <li>Mền chống cháy</li>
        </ul>
        <p><b>Giá vật tư thiết bị hệ thống pccc mới nhất</b></p>
        <p><i>Báo giá bình chữa cháy</i></p>
        <ul>
            <li>Bình chữa cháy bột BC 1kg, 2 kg, 4kg, 8kg, 35kg: 110.000 VND – 1.600.000 VND</li>
            <li>Bình chữa cháy bột ABC 1kg, 2 kg, 4kg, 8kg, 35kg: 120.000 vnđ/ bình – 1.700.000 VND</li>
            <li>Bình chữa cháy CO2 3kg MT3: 305.000 vnđ/ bình</li>
            <li>Bình chữa cháy CO2 5kg MT5: 475.000 vnđ/ bình</li>
            <li>Bình chữa cháy Foam 9l: 395.000 vnđ/bình</li>
        </ul>
        <div class="image">
          <img src="/assets/images/handbook/handbook1-1.png" alt="Bình chữa cháy ABC">
          <i>Bình chữa cháy ABC</i>
        </div>
        <p><b>Báo giá đầu báo</b></p>
        <ul>
            <li>Giá đầu báo cháy, bảo nhiệt khoảng 80.000 ~ 350.000 đầu báo</li>
            <li>Báo giá đầu báo khói: 170.000 ~ 500.000 đầu báo</li>
        </ul>
        <p><i>*Tùy vào số lượng và thương hiệu sẽ có báo giá khác nhau</i></p>
        <p><b>Báo giá cuộn vòi chữa cháy</b></p>
        <ul>
            <li>Vòi chữa cháy D50 – 13 bar TQ 5.0kg có khớp nối: 345.000 vnđ/cuộn</li>
            <li>Vòi chữa cháy D50 – 10 bar TQ 3.7kg có khớp nối: 310.000 vnđ/cuộn</li>
            <li>Vòi chữa cháy D65 – 10 bar TQ 5.2kg có khớp nối: 410.00 vnđ/cuộn</li>
        </ul>
        <p><i>*Tùy vào số lượng và thương hiệu sẽ có báo giá khác nhau</i></p>
        <p><b>Công ty bán thiết bị phòng cháy chữa cháy chất lượng cao địa chỉ tại Tuyên Quang</b></p>
        <p>Trên địa bàn Tuyên Quang có rất nhiều công ty bán thiết bị pccc cho nên có sự cạnh tranh rất cao. Sự khác biệt khi quý khách hàng chọn <a href="https://pccctienphong.vn">PCCC Tiên Phong</a> là đơn vị cung cấp thiết bị phòng cháy chữa cháy cho công trình của bạn là:</p>
        <ul>
            <li>Được chuyên viên tư vấn miễn phí, giải đáp mọi thắc mắc cũng như đưa ra phương án lựa chọn thiết bị phòng cháy chữa cháy tốt cho quý khách dễ sử dụng phù hợp với túi tiền và công trình thi công.</li>
            <li>Có giấy phép kiểm định theo yêu cầu, có đầy đủ CO-CQ </li>
            <li>Thiết bị phòng cháy chữa cháy được nhập khẩu chính hãng, chất lượng tốt nhất</li>
            <li>Được bảo hành theo 12 tháng và đổi trả nếu không may thiết bị bị lỗi nhanh chóng</li>
            <li>Giá cả hợp lý</li>
        </ul>
        <p><i>Chúng tôi sẽ hỗ trợ tối đa vận chuyển đường xa theo từng đơn hàng mua biết bị phòng cháy chữa cháy của quý khách</i></p>
        <p><b>Địa chỉ bán thiết bị phòng cháy chữa cháy giá rẻ</b></p>
        <p>Liên hệ với <a [routerLink]="['/lien-he']">chúng tôi</a> ngay hôm nay nếu các bạn muốn mua thiết bị PCCC, chúng tôi tự hào là đơn vị tốt nhất và uy tín nhất tại Tuyên Quang bán thiết bị PCCC. Hiện tượng hỏa hoạn không chừa một ai, có khi chúng ta phòng bị đầy đủ thiết bị báo cháy gia đình, thiết bị PCCC nhưng chúng lại không bao giờ xảy đến với gia đình mình, nhưng cũng nhiều khi chúng ta thờ ơ trong lúc vận xui đến bất chợt. Vì thế, hãy trang bị hệ thống báo cháy gia đình,thiết bị PCCC để luôn an yên trong cuộc sống</p>
        <div class="pane">
          <p>LIÊN Hệ VỚI CHÚNG TÔI:</p>
          <ul>
            <li><a [routerLink]="['']">CÔNG TY TNHH XÂY DỰNG VÀ PHÒNG CHÁY CHỮA CHÁY TIÊN PHONG</a></li>
            <li>Địa chỉ: ${ app.address }</li>
            <li>Điện thoại: <a href="tel:${ app.call.hotline }">${ app.call.hotline }</a> - <a href="tel: ${ app.call.support }">${ app.call.support }</a></li>
          </ul>
        </div>
      `,
      thumbnailContent: `
        <p>Tầm quan trọng của thiết bị phòng cháy chữa cháy trong đời sống</p>
      `,
      images: ['/assets/images/handbook/handbook1-1.png'],
      thumbnailImage: '/assets/images/handbook/handbook1-1.png',
    },
    {
      id: 'he-thong-bao-chay-khong-day',
      datetime: '',
      name: 'Hệ thống báo cháy không dây',
      tags: ['he-thong-bao-chay-khong-day', 'uu-diem', 'cam-nang-pccc', 'cung-cap-thiet-bi', 'vat-tu-pccc'],
      content: `
        <h3>Ưu điểm của Hệ thống báo cháy không dây so với báo cháy thông thường</h3>
        <p>Bài viết này piSafe sẽ cung cấp cho bạn kiến thức về hệ thống báo cháy không dây và ưu điểm của hệ thống báo cháy không dây so với báo cháy thông thường.</p>
        <p><b>1. Hệ thống báo cháy không dây là gì?</b></p>
        <p>Hệ thống báo cháy không dây là hệ thống phòng cháy chữa cháy được thiết kế để phát hiện và cảnh báo sớm về sự hiện diện của lửa hoặc khói nguy hiểm trong một khu vực cụ thể của tòa nhà hoặc hệ thống kết nối nhiều khu vực. Hệ thống báo cháy không dây không sử dụng dây hoặc đường tín hiệu để kết nối đầu báo cháy mà thay vào đó sử dụng sóng vô tuyến để truyền thông tin giữa các thiết bị.</p>
        <div class="image">
            <img src="/assets/images/handbook/handbook2-1.png" alt="Bình chữa cháy ABC">
            <i>Bình chữa cháy ABC</i>
        </div>
        <p>Các hệ thống phát hiện cháy không dây thường bao gồm các thiết bị như thiết bị trung tâm, cảm biến khói hoặc nhiệt, bộ giao tiếp không dây và thiết bị báo động.</p>
        <p>Một khi cảm biến phát hiện thấy lửa hoặc khói độc, nó sẽ gửi tín hiệu không dây đến trung tâm. Sau đó, trung tâm kích hoạt báo động hoặc gửi thông tin đến một thiết bị báo động để cảnh báo người dùng.</p>
        <p>Hệ thống báo cháy không dây được sử dụng phổ biến tại các tòa nhà lớn và những khu vực khó đi dây dẫn tín hiệu.</p>
        <p><b>2. Ưu điểm của Hệ thống báo cháy không dây so với báo cháy thông thường</b></p>
        <p>Hệ thống báo cháy không dây có nhiều ưu điểm so với hệ thống báo cháy thông thường, bao gồm:</p>
        <ul>
            <li><p>Dễ dàng lắp đặt: Vì hệ thống báo cháy không dây không cần dây điện và dây tín hiệu, nên việc lắp đặt và cài đặt hệ thống trở nên đơn giản hơn. Điều này cũng giúp giảm thời gian và chi phí thi công.</p></li>
            <li><p>Khả năng di chuyển linh hoạt: Hệ thống báo cháy không dây có thể di chuyển linh hoạt và được sử dụng trong nhiều vị trí khác nhau mà không cần phải cắt các dây tín hiệu.</p></li>
            <li><p>Độ chính xác cao: Hệ thống báo cháy không dây sử dụng các cảm biến và thiết bị tiên tiến để phát hiện cháy và khí gas độc hại. Do đó, nó có khả năng xác định chính xác hơn vị trí xảy ra cháy.</p></li>
            <li><p>Tiết kiệm chi phí: Do không cần dây điện và dây tín hiệu, việc lắp đặt và bảo trì hệ thống báo cháy không dây có thể tiết kiệm chi phí hơn so với hệ thống báo cháy thông thường.</p></li>
            <li><p>Dễ dàng mở rộng: Hệ thống báo cháy không dây có thể mở rộng dễ dàng hơn khi cần thiết. Bạn có thể thêm hoặc loại bỏ các thiết bị báo cháy khi cần thiết, mà không cần phải thay đổi cấu trúc dây tín hiệu.</p></li>
        </ul>
        <div class="image">
            <img src="/assets/images/handbook/handbook2-2.png" alt="Bình chữa cháy ABC">
            <i>Bình chữa cháy ABC</i>
        </div>
        <p><b>3. Hệ thống báo cháy không dây piSafe</b></p>
        <p>PiSafe Home là Hệ thống Cảnh báo cháy không dây dành cho các nhà hàng, khách sạn, cây xăng, hộ kinh doanh cá thể, hộ gia đình, chợ… là những nơi chưa lắp đặt báo cháy địa chỉ.</p>
        <div class="images">
            <div class="image">
                <img src="/assets/images/handbook/handbook2-3.png" alt="Bình chữa cháy ABC">
                <i>Bình chữa cháy ABC</i>
            </div>
            <div class="image">
                <img src="/assets/images/handbook/handbook2-4.png" alt="Bình chữa cháy ABC">
                <i>Bình chữa cháy ABC</i>
            </div>
        </div>
        <p>Khi phát hiện nguy cơ cháy nổ, hệ thống báo động sẽ được kích hoạt, lập tức quay số và gửi tin nhắn đến các số điện thoại thành viên cơ sở. Đồng thời, hệ thống cũng tự động điều phối tín hiệu báo động đến trung tâm chỉ huy của cảnh sát trên địa bàn.</p>
        <p>Trên bản đồ giám sát của trung tâm sẽ hiển thị thông tin chi tiết của cơ sở: địa chỉ, sơ đồ thiết kế, giao thông, nguồn nước,…hỗ trợ tối đa các chiến sĩ lên phương án CC-CHCN nhanh chóng, hiệu quả.</p>
        <p><a href="https://pccctienphong.vn">Công ty PCCC Tiên Phong</a> tự hào là đại lý phân phối chính hãng các sản phẩm của Pisafe tại Tuyên Quang và toàn miền Bắc.</p>
        <p><i>=>> Nhanh tay đặt mua ngay để nhận được cảnh báo cháy nổ kịp thời, bảo vệ an toàn cho gia đình và tài sản của bạn!</i></p>
        <div class="pane">
          <p><b><a href="https://pccctienphong.vn">Công ty PCCC Tiên Phong</a> tự hào là đại lý phân phối chính hãng các sản phẩm của Pisafe tại Tuyên Quang và toàn miền Bắc.</b></p>
          <p>LIÊN Hệ VỚI CHÚNG TÔI:</p>
          <ul>
              <li><a href="https://pccctienphong.vn">CÔNG TY TNHH XÂY DỰNG VÀ PHÒNG CHÁY CHỮA CHÁY TIÊN PHONG</a></li>
              <li>Địa chỉ: ${ app.address }</li>
              <li>Điện thoại: <a href="tel:${ app.call.hotline }">${ app.call.hotline }</li>
          </ul>
        </div>
      `,
      thumbnailContent: `
        <p>Ưu điểm của Hệ thống báo cháy không dây so với báo cháy thông thường?</p>
      `,
      images: ['/assets/images/handbook/handbook2-1.png', '/assets/images/handbook/handbook2-2.png', '/assets/images/handbook/handbook2-3.png', '/assets/images/handbook/handbook2-4.png'],
      thumbnailImage: '/assets/images/handbook/handbook2-3.png',
    },
    {
      id: 'huong-dan-cai-dat-he-thong-bao-chay-thong-minh',
      datetime: '',
      name: 'Hệ thống PCCC thông minh',
      tags: ['he-thong-pccc-thong-minh', 'huong-dan-cai-dat', 'dich-vu', 'cung-cap-thiet-bi', 'vat-tu-pccc'],
      content: `
        <h3>Hướng dẫn cài đặt hệ thống báo cháy thông minh trong PCCC? Có nên phụ thuộc vào hệ thống này?</h3>
        <p>Hiện nay, xu hướng cài đặt hệ thống báo cháy thông minh đang trở nên ngày càng phổ biến và được ưa chuộng hơn bởi nhiều ưu điểm vượt trội so với hệ thống báo cháy truyền thống. Để giúp bạn đọc nắm được cách cài đặt hệ thống này, trong bài viết sau đây chúng mình sẽ hướng dẫn bạn cũng như chia sẻ những thứ bạn cần chuẩn bị để lắp đặt hệ thống báo cháy tự động.</p>
        <p><b>Hệ thống báo cháy thông minh là gì?</b></p>
        <p>Hệ thống báo cháy thông minh hay còn gọi là một hệ thống tự động phát hiện sự cố như cháy, hỏa hoạn nhằm cảnh báo tới những người ở gần đấy về nguy cơ cháy nổ. Hệ thống này được sử dụng các cảm biến và thiết bị đo để phát hiện khói, nhiệt độ hoặc các tín hiệu khác của nguy hiểm cháy nổ</p>
        <p>Thông thường hệ thống báo cháy thông minh có thể được cài đặt trong các tòa nhà thương mại, công nghiệp và chung cư cao tầng để đảm bảo an toàn cho người sử dụng và tài sản của họ.</p>
        <div class="image">
            <img src="/assets/images/handbook/handbook3-1.png" alt="Bình chữa cháy ABC">
            <i>Hệ thống báo cháy thông minh là gì?</i>
        </div>
        <p><b>Hướng dẫn cài đặt hệ thống báo cháy thông minh</b></p>
        <p>Cần chuẩn bị những gì để cài đặt hệ thống báo cháy tự động</p>
        <p>Khác với hệ thống báo cháy truyền thống (thủ công) cần người chạy tới nơi lắp đặt để bấm cảnh báo thì hệ thống báo cháy thông minh có thể tự động phát cảnh báo, tuy nhiên hệ thống này sẽ cần thêm các thiết bị cảm biến khói, lửa.</p>
        <p>Trong hệ thống báo cháy thông minh sẽ bao gồm các bộ phận như: tủ trung tâm báo cháy, các cảm biến đầu vào và thiết bị cảnh báo như loa, còi, đèn cảnh báo hoặc bộ quay số khẩn cấp.</p>
        <p>Về cơ chế hoạt động của hệ thống báo cháy tự động sẽ thực hiện theo các bước như sau:</p>
        <ul>
            <li><p>Bước 1: Khi có đám cháy hoặc nguyên nhân gây cháy, các cảm biến sẽ phát hiện nhờ việc cảm nhận không khí, nhiệt độ hoặc khói, khí độc… Sau đó chúng lập tức gửi tín hiệu về tủ báo cháy, còn với hệ thống truyền thống thì cần có người chạy đến tủ trung tâm để ấn nút báo cháy.</p></li>
            <li><p>Bước 2: Tủ báo cháy trung tâm sau khi nhận tín hiệu sẽ có nhiệm vụ là kích hoạt thiết bị báo cháy, báo động khẩn cấp.</p></li>
        </ul>
        <div class="image">
            <img src="/assets/images/handbook/handbook3-2.png" alt="Bình chữa cháy ABC">
            <i>Hướng dẫn cài đặt hệ thống báo cháy thông minh</i>
        </div>
        <p><b>Có nên phụ thuộc vào hệ thống báo cháy thông minh</b></p>
        <p>Là một giải pháp cần thiết cho các hộ gia đình, công ty, nhà xưởng, trường học, chợ… hệ thống cảnh báo cháy thông minh hiện đang rất được yêu thích và ngày càng được cài đặt nhiều hơn. Một số lợi ích và ưu điểm mà hệ thống này mang lại như:</p>
        <ul>
            <li><p>Giúp phát hiện và cảnh báo cháy sớm hạn chế tổn thất cả về người và của do đám cháy gây ra.</p></li>
            <li><p>Mang đến cảm giác an toàn trong cuộc sống cho người lắp đặt và những người xung quanh</p></li>
            <li><p>Giúp người già, trẻ nhỏ tránh được nguy hiểm trong cháy nổ, vì thường người già và trẻ nhỏ có khả năng quan sát và nhận biết đám cháy kém hơn người trưởng thành.</p></li>
            <li><p>Việc lắp đặt hệ thống báo cháy tự động này càng quan trọng hơn tại những nơi hay tập trung đông người, vì ở những địa điểm đó có nguy cơ xảy ra cháy nổ là rất lớn.</p></li>
        </ul>
        <p>Những ưu điểm trên có thể khiến cho rất nhiều người sử dụng yêu thích và đánh giá cao, tuy nhiên việc này cũng dẫn đến việc nhiều người có xu hướng phụ thuộc vào các thiết bị này. Họ nghĩ rằng mọi nguy cơ cháy nổ đều sẽ được hệ thống kiểm soát, do đó thường xuyên lơ là, mất cảnh giác với những tác nhân gây cháy.</p>
        <p>Mặc dù hệ thống báo cháy thông minh nhưng cốt lõi của nó vẫn chỉ là các công cụ, mà thiết bị thì không thể thay thế con người trong việc nhận biết chính xác các nguyên nhân gây cháy. Như vậy, nếu bạn đang có xu hướng phụ thuộc vào hệ thống báo cháy tự động này thì cũng đừng nên quá chủ quan mà không có thêm nhiều biện pháp PCCC nhé.</p>
        <div class="image">
            <img src="/assets/images/handbook/handbook3-3.png" alt="Bình chữa cháy ABC">
            <i>Có nên phụ thuộc vào hệ thống báo cháy thông minh</i>
        </div>
        <p>Nhờ các thiết bị báo cháy thông minh này mà cuộc sống của con người đã trở nên dễ dàng và thuận tiện hơn rất nhiều. Hy vọng với những chia sẻ ở trên, bạn đọc đã có được những kiến thức nhất định về hệ thống báo cháy tự động cũng như nắm được lời khuyên để sử dụng các thiết bị một cách tốt nhất nhé.
        <div class="pane">
            <p><b><a [routerLink]="['']">Công ty PCCC Tiên Phong</a> tự hào là đại lý phân phối chính hãng các sản phẩm của Pisafe tại Tuyên Quang và toàn miền Bắc.</b></p>
            <p>LIÊN Hệ VỚI CHÚNG TÔI:</p>
            <ul>
                <li><a [routerLink]="['']">CÔNG TY TNHH XÂY DỰNG VÀ PHÒNG CHÁY CHỮA CHÁY TIÊN PHONG</a></li>
                <li>Địa chỉ: ${ app.address }</li>
                <li>Điện thoại: <a href="tel:${ app.call.hotline }">${ app.call.hotline }</li>
            </ul>
        </div>
      `,
      thumbnailContent: `
        <p>Cài đặt hệ thống báo cháy thông minh đang trở nên ngày càng phổ biến và được ưa chuộng</p>
      `,
      images: ['/assets/images/handbook/handbook3-1.png', '/assets/images/handbook/handbook3-2.png', '/assets/images/handbook/handbook3-3.png'],
      thumbnailImage: '/assets/images/handbook/handbook3-3.png',
    },
  ];
  constructor() { }
  getHanbookById(id: string): any {
    const item = this.Handbooks.find(item => item.id === id);
    return id ? item : null;
  }
  searchCs(phrase: string = ''): Array<any> {
    return this.Handbooks.filter(item => {
      let joinTags = item.tags.join('+').toLowerCase().trim();
      return joinTags.includes(phrase.toLowerCase().trim());
    });
  }
  _itemcard(item: any): any {
    return {
      id: item['id'],
      datetime: item['datetime'],
      name: item['name'],
      tags: item['tags'],
      thumbnailContent: item['thumbnailContent'],
      thumbnailImage: item['thumbnailImage'],
    };
  }
}
