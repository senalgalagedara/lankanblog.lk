
const availableKeywords = [
    { keyword: 'Study Tips for Advance Level and Ordinary Level', url: '../bloghtmls/Study Tips.html' },
    { keyword: 'Cat food code in C', url: '../codeblog/catfood.html' },
    { keyword: 'Life solution software (Koombiyo TV Series)', url: '../codeblog/lifesolution.html' },
    { keyword: 'Sample Clothing website (HTML/CSS)', url: '../codeblog/clothingwebsitr.html' },
    { keyword: 'Bluetooth Car using Arduino', url: '../codeblog/btcar.html' },
    { keyword: 'Automatic handwash using Arduino', url: '../codeblog/handwash.html' },
    { keyword: 'Automatic Tap using Arduino', url: '../codeblog/automatictap.html' },
    { keyword: 'Obstical Avoiding robot using Arduino', url: '../codeblog/obsticalavoidingrobot.html' },
    { keyword: 'Things that Advance Level student must do', url: '../bloghtmls/G.C.E. Advance Level study tips.html' },
    { keyword: 'G.C.E. A/L past papers (Math, Bio, Chemistry, ICT, Physics)', url: '../bloghtmls/G.C.E. AL past paper.html' },
    { keyword: 'How to write a short note. And here are some examples.', url: '../bloghtmls/How to make short notes.html' },
    { keyword: 'Unlimited motivation for any exam that you are going to face.', url: '../bloghtmls/Unlimited Mortivation.html' },
    { keyword: 'Are you scared of Exams? Here is the solution.', url: '../bloghtmls/why stress.html' },
    { keyword: 'Thank you Roo and Wijaya Pariganaka for your service', url: '../bloghtmls/Thank you Roo & Wijaya Pariganaka.html' },
    { keyword: 'Best telegram links for students', url: '../bloghtmls/Top Telegram links for student in Sri Lanka.html' },
    { keyword: 'Best Educational apps for students', url: '../bloghtmls/Top Education Apps in Sri Lanka.html' },
    { keyword: 'Best Educational websites in Sri Lanka', url: '../bloghtmls/Educational websites.html' },
    { keyword: 'Free Music, YouTube video, Instagram video, Facebook video download links', url: '../bloghtmls/Free music and videos.html' },
    { keyword: 'Explore Colombo', url: '../bloghtmls/Explore Colombo.html' },
    { keyword: 'Narangala Mountain', url: '../bloghtmls/Narangala mountain.html' },
    { keyword: 'Explore Galle', url: '../bloghtmls/Explore Galle.html' },
    { keyword: 'Kehelpathdoruwahike', url: '../bloghtmls/Kehelpathdoruwahike.html' },
    { keyword: 'Knuckles', url: '../bloghtmls/Knukels.html' },
    { keyword: 'Vesak', url: '../bloghtmls/Vesak.html' }
  ];

  const resultBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");

  inputBox.addEventListener("input", function () {
    let input = inputBox.value.toLowerCase();
    let result = [];

    if (input.length) {
      result = availableKeywords.filter((item) => {
        return item.keyword.toLowerCase().includes(input);
      });
    }

    display(result);
  });

  function display(result) {
    const content = result.map((item) => {
      return"<li class='listboxli' onclick=\"window.location.href='" + item.url + "';\">" + item.keyword + "</li><hr>";
    });

    resultBox.innerHTML = "<ul class='listboxul'>" + content.join('') + "</ul>";
  }

  function toggleSearch() {
    var searchBar = document.querySelector('.searchbar');
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
}
