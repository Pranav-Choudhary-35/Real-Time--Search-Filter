const users = [
    {
        name: "Pranav Choudhary",
        pic: "https://media.licdn.com/dms/image/v2/D5603AQGQTLk9TQWrEg/profile-displayphoto-crop_800_800/B56Zh.4ikUHcAg-/0/1754475410105?e=1758153600&v=beta&t=2td3ylYK-4tI7YCCTlxcFYVE0g2bksC3qau8TlHgjIU",
        bio: "Passionate Coder & Tech Enthusiast | Final Year CS Student Developing Impactful Applications",
    },
    { name: "Aarav Mehta", pic: "https://randomuser.me/api/portraits/men/32.jpg", bio: "Full-Stack Developer | Loves building scalable web apps and exploring AI." },
    { name: "Ishita Sharma", pic: "https://randomuser.me/api/portraits/women/45.jpg", bio: "UI/UX Designer | Crafting user-friendly and visually appealing experiences." },
    { name: "Rohan Verma", pic: "https://randomuser.me/api/portraits/men/14.jpg", bio: "Data Scientist | Turning raw data into meaningful business insights." },
    { name: "Simran Kaur", pic: "https://randomuser.me/api/portraits/women/76.jpg", bio: "Frontend Developer | React.js specialist with a love for clean design." },
    { name: "Kunal Patel", pic: "https://randomuser.me/api/portraits/men/28.jpg", bio: "Mobile App Developer | Flutter & Kotlin enthusiast, creating smooth user experiences." },
    { name: "Ananya Gupta", pic: "https://randomuser.me/api/portraits/women/84.jpg", bio: "Cloud Engineer | AWS Certified, passionate about cloud infrastructure." }
];

const cardsContainer = document.querySelector(".cards");
const searchInput = document.querySelector(".inp");

function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blurredLayer, content);
    return card;
}

function showUsers(userArray) {
    cardsContainer.innerHTML = "";
      if (userArray.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "User not found";
        msg.style.color = "white"; // white text
        msg.style.textAlign = "center";
        msg.style.fontSize = "18px";
        cardsContainer.appendChild(msg);
        return;
    }
    const fragment = document.createDocumentFragment();
    userArray.forEach(user => fragment.appendChild(createUserCard(user)));
    cardsContainer.appendChild(fragment);
}

// Debounce utility
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().startsWith(query));
    showUsers(filteredUsers);
};

// Apply debounce (300ms)
searchInput.addEventListener("input", debounce(handleSearch, 300));

// Initial render
showUsers(users);













// const users = [
//     { 
//         name: "Pranav Choudhary", 
//         pic: "https://media.licdn.com/dms/image/v2/D5603AQGQTLk9TQWrEg/profile-displayphoto-crop_800_800/B56Zh.4ikUHcAg-/0/1754475410105?e=1758153600&v=beta&t=2td3ylYK-4tI7YCCTlxcFYVE0g2bksC3qau8TlHgjIU", 
//         bio: "Passionate Coder & Tech Enthusiast | Final Year CS Student Developing Impactful Applications" 
//     }, 
//     { 
//         name: "Aarav Mehta", 
//         pic: "https://randomuser.me/api/portraits/men/32.jpg", 
//         bio: "Full-Stack Developer | Loves building scalable web apps and exploring AI." 
//     }, 
//     { 
//         name: "Ishita Sharma", 
//         pic: "https://randomuser.me/api/portraits/women/45.jpg", 
//         bio: "UI/UX Designer | Crafting user-friendly and visually appealing experiences." 
//     }, 
//     { 
//         name: "Rohan Verma", 
//         pic: "https://randomuser.me/api/portraits/men/14.jpg", 
//         bio: "Data Scientist | Turning raw data into meaningful business insights." 
//     }, 
//     { 
//         name: "Simran Kaur", 
//         pic: "https://randomuser.me/api/portraits/women/76.jpg", 
//         bio: "Frontend Developer | React.js specialist with a love for clean design." 
//     }, 
//     { 
//         name: "Kunal Patel", 
//         pic: "https://randomuser.me/api/portraits/men/28.jpg", 
//         bio: "Mobile App Developer | Flutter & Kotlin enthusiast, creating smooth user experiences." 
//     }, 
//     { 
//         name: "Ananya Gupta", 
//         pic: "https://randomuser.me/api/portraits/women/84.jpg", 
//         bio: "Cloud Engineer | AWS Certified, passionate about cloud infrastructure." 
//     } 
// ];

// function showUsers(arr) {
//     arr.forEach(function(user) {
//         // Parent element jisme card append karna hai
//         const container = document.querySelector(".bd"); // body me directly append kar raha hoon
        
//         // Card wrapper
//         const card = document.createElement("div");
//         card.classList.add("card");

//         // Image
//         const img = document.createElement("img");
//         img.src = user.pic;
//         img.classList.add("bg-img");

//         // Blurred layer
//         const blurredLayer = document.createElement("div");
//         blurredLayer.style.backgroundImage = `url(${user.pic})`;
//         blurredLayer.classList.add("blurred-layer");

//         // Content div
//         const content = document.createElement("div");
//         content.classList.add("content");

//         // Heading
//         const h3 = document.createElement("h3");
//         h3.textContent = user.name;

//         // Paragraph
//         const p = document.createElement("p");
//         p.textContent = user.bio;

//         // Append elements properly
//         content.appendChild(h3);
//         content.appendChild(p);

//         card.appendChild(img);/
//         card.appendChild(blurredLayer);
//         card.appendChild(content);

//         // finally append card to the body or any container
//         document.querySelector(".cards").appendChild(card);
//     });
// }

// showUsers(users);

// let inp = document.querySelector(".inp");
// inp.addEventListener("input", function() {
//     let newUsers = users.filter((user) => {
//         return user.name.startsWith(inp.value);
//     });
//     document.querySelector(".cards").innerHTML = "";
//     showUsers(newUsers);
// });
