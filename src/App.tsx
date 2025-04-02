import React, { useState, useEffect } from 'react';
import { Sun, Moon, Trophy, Target, AlertTriangle, BookOpen } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);
  

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-40">
        <div className="flex items-center gap-1">
          <img src="https://8xbet-keo-nha-cai-vnm.vercel.app/8xbet_light_ logo.svg" alt=" Logo" className="w-30 h-30" />
          
          
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Kèo Nhà Cái: Bí Quyết Chọn Kèo Chính Xác Nhất
          </h1>

          <div className="relative rounded-xl overflow-hidden mb-12">
            <img
              src="https://8xbet-keo-nha-cai-vnm.vercel.app/keo-nha-cai.webp"
              alt="Kèo Nhà Cái"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              
            </div>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
           
           
          <div className="grid grid-cols-2 gap-6 p-6 text-justify bg-white shadow-lg rounded-lg">
      <div className="text-dark text-lg font-medium">
        <strong>Kèo nhà cái </strong>và những bí ẩn nằm đằng sau nó luôn là chủ đề nóng hổi thu hút đông đảo sự quan tâm của hàng triệu người chơi. Để có thể giành được chiến thắng vẻ vang và rinh về những phần thưởng siêu hấp dẫn, việc lựa chọn kèo cược chính xác là yếu tố quyết định.
      </div>
      <div className="text-dark text-lg font-medium">
        Chính vì vậy, <strong>8xbet </strong>sẽ khám phá sự thật thú vị đằng sau những con số may mắn được gắn mác là “số đẹp”, cũng như phương pháp chính xác chọn ra các con số này hiệu quả. Cùng theo dõi bài viết dưới đây nhé!
      </div>
    </div>


           
            <h2 className="text-4xl md:text-5xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Giới thiệu tầm quan trọng của kèo nhà cái

          </h2>
            <div className="flex items-center gap-3 mb-4">
              <img
              src="https://8xbet-keo-nha-cai-vnm.vercel.app/gioi-thieu-tam-quan-trong-cua-keo.webp"
              alt="Giới thiệu tầm quan trọng của Kèo nhà cái vai-tro-cua-keo-nha-cai-can-nam-ro"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
             Kèo nhà cái trực tuyến hay còn được gọi với cái tên tỷ lệ cược. Đây là công cụ phổ biến được sân chơi 8xbet sử dụng để tạo thêm tính cạnh tranh cũng như sự hấp dẫn trong vô vàn các trận đấu thể thao, đặc biệt nhất là bóng đá.
</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Hiểu một cách đơn giản hơn thì kèo cược này chính là những con số may mắn mà đơn vị đưa ra để thành viên tham gia đặt cược vào kết quả trận đấu. Mỗi một con số đều có ý nghĩa và đại diện cho 1 tỷ lệ đổi thưởng khác nhau. Hiện nay, tại nhà cái 8xbet có một số loại kèo cực kỳ hấp dẫn như kèo chấp châu Á, kèo phạt góc, kèo tài xỉu, kèo châu Âu,...
 </p>
 <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Việc chọn lựa chính xác kèo nhà cái đóng một vai trò vô cùng quan trọng trong quy trình giải trí, cá độ của người chơi. Nó sẽ đem lại cho bạn rất nhiều những sự tiện ích như sau:
</p>

 <ul className="space-y-3 pl-6  text-dark">
                  <li className="flex items-center gap-3  ">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-dark ">Lựa chọn loại kèo cược đúng đắn sẽ giúp bạn tăng khả năng giành chiến thắng và thu về nguồn lợi nhuận cực cao.
</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-dark">Khi bạn hiểu rõ kèo cược, việc phân tích kỹ thông tin đội bóng sẽ giúp bạn có nhiều kiến thức và đưa ra quyết định sáng suốt hơn.
</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-dark">Chọn kèo chính xác giúp bạn giảm thiểu rủi ro mất tiền cược.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-dark">Tạo nên niềm vui cũng như sự hứng thú vô tận của bạn trong hành trình tham gia giải trí các bộ môn thể thao hấp dẫn tại 8xbet.
</span>
                  </li>
                 
                </ul>




            

            
            
          </section>

          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Các yếu tố cần phải xem xét khi chọn kèo cược 8xbet
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
             Hiện nay, để có thể chọn lựa được loại kèo thể thao thích hợp thì người chơi cần phải phân tích trước những yếu tố có ảnh hưởng đến tỷ số kèo như sau:
              </p>

          <div className="grid gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
              <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Ảnh hưởng từ hiệu ứng placebo</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Niềm tin vào "số đẹp" không chỉ đơn thuần là một lựa chọn ngẫu nhiên mà còn phản ánh một phần tâm lý của người chơi. Cảm giác được tự mình chọn ra những con số mang ý nghĩa cá nhân khiến họ cảm thấy như đang nắm giữ một phần quyền kiểm soát kết quả. Điều này tạo ra một hiệu ứng tâm lý tích cực, giúp cược thủ cảm thấy lạc quan hơn và sẵn sàng đối mặt với bất kỳ kết quả nào.
              </p>


             <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Phân tích phong độ đấu hiện tại của đội bóng</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
           Để làm rõ yếu tố này, người chơi có thể phân tích 5 trận đấu gần đây nhất của đội tuyển, xem số trận thắng, số trận đã hòa và thua của họ. Bảng thành tích này cho thấy rõ ràng phong độ hiện tại của đội như ổn định, lên dốc hoặc đang có dấu hiệu xuống dốc hay không.
</p>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Bên cạnh đó, người chơi cũng có thể xem xét hàng công của đội có thi đấu hiệu quả với số bàn thắng tối đa mà đội đã giành được chưa, tất cả những điều trên đều sẽ cho thấy rõ ràng phong độ và trạng thái chuẩn bị ra sân trận kế tiếp của đội.
</p>


 <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Xem xét sức mạnh đội hình</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
       Để xem về sức mạnh đội hình, người chơi cần biết được điểm tựa lớn nhất của đội hiện nay là cầu thủ nào, người nào đang có phong độ chiến đấu cao nhất. Sau đó, bạn có thể xem xét về khía cạnh đội sẽ gặp khó khăn nhất định nếu thiếu cầu thủ chấn thương nào đó. 
 </p>
               <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Phân tích lịch sử đối chiến</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
     Trong khoảng 10 trận đối đầu gây cấn gần nhất, 2 đội tuyển của bạn đã có được bao nhiêu trận thắng, hòa và thua. Nếu bạn phân tích rõ ràng tiêu chí này thì có thể thấy được sức mạnh của 2 đội chênh lệch nhau bao xa. Đội nào bị yếu ở phương diện nào và đội nào có nhiều lợi thế hơn trên sân cỏ.
 </p>
 <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Bàn về yếu tố bên ngoài</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
    Bên cạnh những yếu tố ảnh hưởng trực tiếp đến kết quả tỷ số kèo thì các tác nhân bên lề như sân bãi, điều kiện thời tiết,... cũng sẽ ảnh hưởng chút ít đến trận đấu. Ngoài ra, những thông tin mới trên thị trường cũng là một trong những yếu tố hot hit giúp bạn có sự đánh giá chuẩn hơn về kết quả trận đấu.
</p>


              

              
             
            </div>

            
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white mb-12">
         
            <h2 className="text-3xl font-bold mb-6">Bí quyết hay giúp bet thủ chọn kèo chính xác 100%</h2>
            <img
              src="https://8xbet-keo-nha-cai-vnm.vercel.app/bi-quet-chon-keo-nha-cai-chinh-xac-cho-thu.webp"
              alt="Bí quyết chọn kèo nhà cái chính xác cho tân thủ
"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-8"
            />
             <div className="mt-6 space-y-4">
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-white">
      Để giúp người chơi 8xbet tinh tường hơn trong việc chọn lựa kèo nhà cái, sau đây chúng tôi sẽ giới thiệu cho các bạn một số bí kíp hay sau đây!
 </p>




          <h3 className="font-bold text-2xl mb-4 text-white">Nắm rõ thông tin tỷ lệ cược</h3>
              
                 <p className="text-gray-700 text-white text-lg leading-relaxed">
           Để có thể an tâm tận hưởng hàng trăm giải đấu thể thao 8xbet cực lôi cuốn mỗi ngày, hội viên nhất định phải nắm rõ thông tin liên quan đến tỷ lệ.
            Có thể nói đây chính là bước đi đầu tiên mà đơn vị dành cho bạn. Chỉ khi bạn nắm rõ và am hiểu những loại kèo này từ A đến Z thì bạn mới có 
            thể nhanh tay chọn lựa và ra các quyết định phù hợp với ván cược của bản thân mình.

</p>

    
          <h3 className="font-bold text-2xl mb-4 text-white">Quản lý nguồn chi tiêu thể thao hiệu quả</h3>
              
                 <p className="text-gray-700 text-white text-lg leading-relaxed">
          Việc thứ hai mà thành viên cần thực hiện đúng để có một quy trình trải nghiệm ổn áp hơn, đó chính là quản lý nguồn chi tiêu của bản thân. Theo như lời khuyên từ chuyên gia bóng đá 8xbet, người chơi nên chia nhỏ lẻ số tiền cược của mình ra, sau đó đặt một giới hạn rõ ràng về việc thắng và thua cuộc. Nếu như bạn thua thì không nên cố gỡ, hoặc nếu bạn thắng nhiều lần thì nhất định phải bình tĩnh và dừng lại đúng lúc.
</p>

         <h3 className="font-bold text-2xl mb-4 text-white">Tìm thông tin đến từ nhiều nguồn uy tín
</h3>
              
                 <p className="text-gray-700 text-white text-lg leading-relaxed">
          Hiện nay, nhà cái 8xbet có cung cấp đa dạng các diễn đàn soi kèo chuẩn cũng như công cụ giải mã thông tin hiện đại. Nếu như bạn có thể tận dụng những nguồn uy tín này thì quá trình phân tích kèo cược của bạn sẽ diễn ra ngày một tốt đẹp hơn nữa.
</p>

          <h3 className="font-bold text-2xl mb-4 text-white">Kỷ luật đi kèm kiên nhẫn
</h3>
              
                 <p className="text-gray-700 text-white text-lg leading-relaxed">
           Khi tham gia cá độ trực tuyến, việc bạn giữ được sự bình tĩnh, kiên nhẫn cũng như kỷ luật với bản thân thì cực kỳ đáng quý. Bằng cách trải nghiệm từ từ, không nóng vội thì người chơi có thể cảm thấp chơi game chỉ là hình thức giải trí thoải mái. Thông qua đó, bạn sẽ luôn tuân thủ theo những kế hoạch mà bản thân đặt ra và lúc nào cũng biết chơi biết điểm dừng đúng lúc.
</p>

      <p className="text-gray-700 text-white text-lg leading-relaxed">
        <strong> Kèo nhà cái </strong>luôn là một thử thách cực kỳ thú vị đối với người chơi. Tuy nhiên, để giành được chiến thắng một cách vang dội, bạn không chỉ cần đến sự may mắn mà còn cần cả kiến thức và kinh nghiệm.
</p>




     

      <p className="text-gray-700 text-white text-lg leading-relaxed">
         Hy vọng những nội dung <strong>8XBet </strong>chia sẻ trên đây sẽ giúp bạn có cái nhìn tổng quan hơn về cách chọn kèo chính xác và có cho mình những bước đi thật đúng đắn!
</p>







                <ul className="space-y-3 pl-6  text-white">
                  <li className="flex items-center gap-3  ">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-white "><strong>Giải mã giấc mơ:</strong> Nhiều cược thủ tin rằng giấc mơ mang đến những điềm báo về tương lai, bao gồm cả những con số may mắn. Bằng cách ghi lại và phân tích giấc mơ, anh em có thể tìm ra những con số tiềm năng.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-white"><strong>Soi cầu lô rơi:</strong> Đây là một trong những phương pháp được khá nhiều cược thủ ưa chuộng. Bằng cách theo dõi kết quả xổ số trong một khoảng thời gian nhất định, người chơi sẽ tìm ra những cặp số hay về cùng nhau, những con số lâu ngày chưa về, từ đó đưa ra dự đoán cho những kỳ quay tiếp theo.
</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-white"><strong>Soi cầu lô kép:</strong> Lô kép, những cặp số đối xứng và đẹp mắt, từ lâu đã trở thành tâm điểm chú ý của nhiều người chơi lô đề. Với niềm tin rằng sự lặp lại của các con số sẽ mang đến may mắn, nhiều thánh soi cầu đã dành thời gian theo dõi tần suất xuất hiện của lô kép, hy vọng tìm ra những quy luật ẩn chứa và dự đoán được kết quả xổ số.
</span>
                  </li>
                 
                </ul>
                  <h2 className="text-3xl font-bold mb-6">Lưu ý quan trọng khi chọn chơi “Số đẹp” trong xổ số</h2>
                <p className="text-gray-700  text-white text-lg leading-relaxed">
     Để có thể tham gia chơi xổ số trực tuyến nói chung và áp dụng hiệu quả các phương pháp soi cầu nói riêng, đòi hỏi anh em cần lưu ý một số điều dưới đây:
              </p>
                 <ul className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-8 space-y-6 mb-12">
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Xổ số là trò chơi may rủi: </strong>Dù có áp dụng bất kỳ phương pháp nào, kết quả xổ số vẫn phụ thuộc vào yếu tố may mắn. Việc chọn "số đẹp" chỉ là một cách tăng thêm niềm vui và sự hứng thú khi chơi, không phải là cách đảm bảo chắc chắn trúng thưởng.</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Luôn giữ thái độ tích cực:</strong> Dù kết quả chơi như thế nào, hãy luôn giữ cho mình một tâm lý thoải mái. Việc quá căng thẳng hoặc đặt quá nhiều kỳ vọng vào kết quả có thể ảnh hưởng đến cuộc sống hàng ngày.
</span>
              </li>


 <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Tham gia các đơn vị chơi xổ số uy tín: </strong>Lựa chọn những nhà cái uy tín, có giấy phép hoạt động hợp pháp để đảm bảo quyền lợi của mình như 8xbet. Tránh tham gia vào các trang web lừa đảo, không rõ nguồn gốc.


</span>
              </li>

                   
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Quản lý ngân sách hợp lý: </strong>Đặt ra một giới hạn ngân sách cụ thể cho việc chơi xổ số và tuyệt đối không vượt quá số tiền đó. Hãy coi xổ số như một hình thức giải trí, không nên đầu tư quá nhiều tiền vào đó.

</span>
              </li>
            </ul>
              </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
               
                <p className="text-gray-100">
                 <strong>8xbet </strong>hy vọng rằng những thông tin chia sẻ trong bài viết này sẽ hữu ích cho người chơi trong hành trình tìm kiếm những con số đẹp may mắn. Hãy luôn nhớ rằng,  <strong>xổ số  </strong>là một trò chơi may rủi, và việc trúng thưởng phụ thuộc vào nhiều yếu tố. </p>
                    <p className="text-gray-100">
Chúc anh em may mắn và có những trải nghiệm thú vị cùng  <strong>8xbet! </strong>
                </p>
              </div>

            

              


            </div>
          </div>

         
        </div>
      </main>

<section>
<div>
  <footer className="fixed px-6 py-4 bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-40 w-full">
  <div className="flex items-center gap-5">
    <img src="https://8xbet-keo-nha-cai-vnm.vercel.app/8xbet_light_ logo.svg" alt="Logo" className="w-30 h-30" />
  </div>
  <div className="ml-auto text-sm text-gray-600 dark:text-gray-300">
    © 2025 <a href="https://8xbet-keo-nha-cai-vnm.vercel.app/" className="text-blue-600 hover:underline">8xbet</a>. All rights reserved.
  </div>
</footer>
  </div>
</section>

    </div>
  );
}

export default App;