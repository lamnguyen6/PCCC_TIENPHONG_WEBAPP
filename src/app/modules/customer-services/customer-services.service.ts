import { Injectable } from '@angular/core';
import { CsCard, CsItem, SideMenuItem } from './customerServices.interface';



@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {
  private CS: Array<CsItem> = [
    {
      id: 'thi-cong-va-lap-dat',
      datetime: '',
      name: 'Thi công và lắp đặt',
      tags: ['thi-cong-lap-dat', 'dich-vu', 'cung-cap-thiet-bi', 'vat-tu-pccc'],
      content: `
        <h3>Cung cấp thiết bị, vật tư PCCC & thi công lắp đặt hệ thống PCCC</h3>
        <p>Công ty TNHH Xây dựng và PCCC Tiên Phong chuyên cung cấp các thiết bị đảm bảo an toàn phòng cháy chữa cháy cho các cơ sở công cộng, doanh nghiệp, nhà ở và các công trình xây dựng tại tỉnh Tuyên Quang và các tỉnh miền núi phía Bắc của Việt Nam. Đây là một ngành nghề có tính quan trọng cao, đảm bảo sự an toàn của người và tài sản trong trường hợp xảy ra hỏa hoạn.</p>
        <p>Tiên Phong có vai trò cung cấp các thiết bị và vật tư liên quan đến phòng cháy chữa cháy, bao gồm:</p>
        <p>Thiết bị chữa cháy: Các loại bình chữa cháy, hệ thống chữa cháy tự động và bằng tay, máy bơm nước chữa cháy, thiết bị phun bọt xịt foam, hệ thống phun sương nước chữa cháy, thiết bị phun khí CO2, v.v.</p>
        <p>Vật tư phòng cháy chữa cháy: Dây cứu hộ, áo bảo hộ cháy, mũ bảo hiểm, bình oxy tự động, áo tập luyện phòng cháy chữa cháy, v.v.</p>
        <p>Hệ thống báo cháy và cảnh báo: Các thiết bị báo cháy, cảm biến khói, cảm biến nhiệt độ, hệ thống báo động âm thanh và ánh sáng, v.v.</p>
        <p>Hệ thống thoát hiểm: Các thiết bị thoát hiểm như cầu thang, lối thoát hiểm, biển chỉ dẫn lối thoát, v.v.</p>
        <p>Dịch vụ và tư vấn: Cung cấp dịch vụ lắp đặt, kiểm tra, bảo dưỡng hệ thống PCCC, tư vấn về các giải pháp an toàn phòng cháy chữa cháy cho khách hàng.</p>
        <p>Với vị trí tại các tỉnh miền núi phía Bắc, công ty có vai trò quan trọng trong việc đảm bảo rằng các cơ sở và cộng đồng trong khu vực này được trang bị đầy đủ và hiệu quả các thiết bị và vật tư phòng cháy chữa cháy. Điều này đóng góp quan trọng vào việc giảm thiểu nguy cơ hỏa hoạn và đảm bảo an toàn cho mọi người và tài sản trong cộng đồng.</p>
      `,
      thumbnailContent: `
        <p>Công ty TNHH Xây dựng và PCCC Tiên Phong có đội ngũ chuyên gia để tư vấn các giải pháp cho hệ thống PCCC đáp ứng các tiêu chuẩn của BCA. Cung cấp thiết bị PCCC chất lượng, an toàn cao. Chúng tôi muốn chắc chắn rằng hệ thống PCCC của bạn luôn trong trạng thái sẵn sàng hoạt động.</p>
      `,
      coverImage: '',
      thumbnailImage: '',
      icons: ['contest'],
    },
    {
      id: 'tu-van-thiet-ke-va-giam-sat-he-thong',
      datetime: '',
      name: 'Tư vấn thiết kế và giám sát hệ thống',
      tags: ['tu-van-thiet-ke', 'giam-sat-he-thong', 'dich-vu', 'cung-cap-thiet-bi', 'vat-tu-pccc'],
      content: `
        <h3>Tư vấn thiết kế, giám sát hệ thống PCCC và hệ thống báo cháy thông minh</h3>
        <p>Công ty TNHH Xây dựng và PCCC Tiên Phong cung cấp dịch vụ tư vấn, thiết kế và giám sát các hệ thống phòng cháy chữa cháy (PCCC) cùng hệ thống báo cháy thông minh cho các công trình xây dựng, cơ sở công cộng, doanh nghiệp và nhà ở tại tỉnh Tuyên Quang và các tỉnh miền núi phía Bắc của Việt Nam. Đây là lĩnh vực rất quan trọng nhằm đảm bảo an toàn trong trường hợp xảy ra hỏa hoạn và các tình huống nguy hiểm liên quan đến cháy nổ.</p>
        <p>Công ty Tiên Phong thực hiện các hoạt động sau trong lĩnh vực này:</p>
        <ul>
          <li><p>Tư vấn và phân tích: Công ty tư vấn với khách hàng để hiểu rõ yêu cầu cụ thể của họ, từ đó xác định các giải pháp phù hợp cho hệ thống PCCC và hệ thống báo cháy thông minh. Điều này bao gồm việc đánh giá nguy cơ cháy và xác định các yếu tố cần thiết để bảo vệ tối ưu.</p></li>
          <li><p>Thiết kế hệ thống: Công ty tiến hành thiết kế chi tiết hệ thống PCCC và hệ thống báo cháy thông minh dựa trên yêu cầu của khách hàng và các quy định, tiêu chuẩn an toàn liên quan. Điều này bao gồm xác định vị trí lắp đặt các thiết bị, cảm biến, hệ thống cảnh báo và các yếu tố liên quan khác.</p></li>
          <li><p>Giám sát thi công: Công ty theo dõi quá trình thi công lắp đặt hệ thống PCCC và hệ thống báo cháy thông minh để đảm bảo rằng các công việc được thực hiện đúng theo thiết kế và đạt đủ chất lượng an toàn.</p></li>
          <li><p>Kiểm tra và thử nghiệm: Sau khi hoàn thành lắp đặt, công ty thường thực hiện kiểm tra và thử nghiệm toàn bộ hệ thống để đảm bảo rằng nó hoạt động hiệu quả và đáp ứng đúng các tiêu chuẩn an toàn.</p></li>
          <li><p>Hướng dẫn sử dụng và đào tạo: Công ty cung cấp hướng dẫn sử dụng hệ thống PCCC và hệ thống báo cháy thông minh cho nhân viên cơ sở. Họ cũng có thể cung cấp đào tạo về cách sử dụng thiết bị và phản ứng trong tình huống khẩn cấp.</p></li>
          <li><p>Bảo trì và hỗ trợ sau bán hàng: Công ty có thể cung cấp dịch vụ bảo trì định kỳ cho hệ thống PCCC và hệ thống báo cháy thông minh để đảm bảo rằng chúng luôn hoạt động đúng cách. Hỗ trợ kỹ thuật cũng được cung cấp trong trường hợp xảy ra sự cố hoặc câu hỏi.</p></li>
        </ul>
        <p>Lĩnh vực này giúp đảm bảo rằng các công trình và cơ sở tại khu vực tỉnh Tuyên Quang và các tỉnh miền núi phía Bắc được trang bị các hệ thống bảo vệ an toàn hiện đại và hiệu quả để ngăn chặn và phản ứng nhanh chóng đối với nguy cơ cháy nổ.</p>
      `,
      thumbnailContent: `
        <p>Công ty TNHH Xây dựng và PCCC Tiên Phong chuyên cung cấp các thiết bị đảm bảo an toàn phòng cháy chữa cháy cho các cơ sở công cộng, doanh nghiệp, nhà ở và các công trình xây dựng tại tỉnh Tuyên Quang và các tỉnh miền núi phía Bắc của Việt Nam. Đây là một ngành nghề có tính quan trọng cao, đảm bảo sự an toàn của người và tài sản trong trường hợp xảy ra hỏa hoạn.</p>
      `,
      coverImage: '',
      thumbnailImage: '',
      icons: ['design', 'monitor'],
    },
    {
      id: 'tu-van-thiet-ke-va-thi-cong-xay-dung',
      datetime: '',
      name: 'Tư vấn thiết kế và thi công xây dựng',
      tags: ['tu-van-thiet-ke', 'thi-cong-xay-dung', 'dich-vu', 'cung-cap-thiet-bi', 'vat-tu-pccc'],
      content: `
        <h3>Tư vấn thiết kế và thi công xây dựng</h3>
        <p>Công ty TNHH Xây dựng và PCCC Tiên Phong cung cấp dịch vụ tư vấn, thiết kế và thực hiện các công trình xây dựng, bao gồm cả công trình liên quan đến phòng cháy chữa cháy (PCCC), tại tỉnh Tuyên Quang và các tỉnh miền núi phía Bắc của Việt Nam. Lĩnh vực này đảm bảo rằng các công trình được xây dựng đáp ứng đầy đủ các yêu cầu kỹ thuật, an toàn và thiết kế estetik.</p>
        <p>Công ty Tiên Phong thực hiện các hoạt động sau trong lĩnh vực này:</p>
        <ul>
            <li><p>Tư vấn và phân tích: Công ty tư vấn với khách hàng để hiểu rõ yêu cầu của họ, từ đó xác định các giải pháp phù hợp cho việc thiết kế và thi công xây dựng. Điều này bao gồm việc đánh giá các yếu tố liên quan như mục tiêu sử dụng, quy mô, ngân sách, và các yêu cầu kỹ thuật đặc thù.</p></li>
            <li><p>Thiết kế kiến trúc và kỹ thuật: Công ty thực hiện thiết kế kiến trúc và kỹ thuật dựa trên yêu cầu và mong muốn của khách hàng. Điều này bao gồm việc tạo ra các bản vẽ thiết kế, định hình cấu trúc, mô hình không gian và các yếu tố thiết kế khác.</p></li>
            <li><p>Lập kế hoạch thi công: Công ty thực hiện lập kế hoạch thi công dựa trên thiết kế đã được phê duyệt. Kế hoạch này bao gồm lên lịch trình thi công, xác định nguồn lực và vật liệu cần thiết, cũng như đảm bảo tuân thủ các quy định an toàn và tiêu chuẩn.</p></li>
            <li><p>Thi công xây dựng: Công ty tiến hành thi công xây dựng theo kế hoạch đã được định sẵn. Các công việc bao gồm đào móng, xây dựng kết cấu, lắp đặt hệ thống PCCC nếu có, và các công đoạn khác liên quan.</p></li>
            <li><p>Kiểm tra và thử nghiệm: Sau khi hoàn thành thi công, công ty thường thực hiện kiểm tra và thử nghiệm các hệ thống như PCCC và hệ thống báo cháy thông minh để đảm bảo rằng chúng hoạt động đúng cách.</p></li>
            <li><p>Bàn giao công trình: Công ty thực hiện quá trình bàn giao công trình cho khách hàng, bao gồm việc cung cấp các tài liệu, bản vẽ và hướng dẫn về việc sử dụng và bảo trì công trình.</p></li>
            <li><p>Bảo trì và hỗ trợ sau bán hàng: Công ty có thể cung cấp dịch vụ bảo trì định kỳ cho công trình và hỗ trợ kỹ thuật sau bán hàng trong trường hợp cần thiết.</p></li>
        </ul>
        <p>Lĩnh vực "Tư vấn thiết kế và thi công xây dựng" đảm bảo rằng các công trình tại khu vực tỉnh Tuyên Quang và các tỉnh miền núi phía Bắc được xây dựng với chất lượng cao, đáp ứng đầy đủ các tiêu chuẩn kỹ thuật và an toàn, từ đó góp phần tạo nên một môi trường sống và làm việc an toàn, tiện nghi và thẩm mỹ.</p>
      `,
      thumbnailContent: `
        <p>Công ty TNHH Xây dựng và PCCC Tiên Phong cung cấp dịch vụ tư vấn, thiết kế và thực hiện các công trình xây dựng, bao gồm cả công trình liên quan đến phòng cháy chữa cháy (PCCC), tại tỉnh Tuyên Quang và các tỉnh miền núi phía Bắc của Việt Nam. Lĩnh vực này đảm bảo rằng các công trình được xây dựng đáp ứng đầy đủ các yêu cầu kỹ thuật, an toàn và thiết kế estetik.</p>
      `,
      coverImage: '',
      thumbnailImage: '',
      icons: ['design', 'contest'],
    },
  ];
  constructor() { }
  getCsById(id: string): any {
    const item = this.CS.find(item => item.id === id);
    return id ? item : null;
  }
  getSideMenuList(): Array<SideMenuItem> {
    return this.CS.map(({ id, name }) => ({ id, name, group: 'Dịch vụ' }));
  }
  searchCs(phrase: string = ''): Array<CsItem> {
    return this.CS.filter(item => {
      let joinTags = item.tags.join('+').toLowerCase().trim();
      return joinTags.includes(phrase.toLowerCase().trim());
    });
  }
  _itemcard(item: CsItem): CsCard {
    return {
      id: item['id'],
      datetime: item['datetime'],
      name: item['name'],
      tags: item['tags'],
      thumbnailContent: item['thumbnailContent'],
      thumbnailImage: item['thumbnailImage'],
      icons: item['icons'],
    };
  }
}
