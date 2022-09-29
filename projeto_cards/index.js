const avatars = [
  {
    name: "John Doe",
    avatar:
      "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    role: "Engineer",
  },
  {
    name: "Flash Tompson",
    avatar: "https://www.personality-database.com/profile_images/24529.png",
    role: "student",
  },
  {
    name: "Clark Kent",
    avatar:
      "https://img.favpng.com/6/11/23/illustration-superman-clip-art-vector-graphics-flat-design-png-favpng-w1Rh0CWqDX2yub0qj23rpftg5.jpg",
    role: "Repórter",
  },
  {
    name: "Bruce Wayne",
    avatar:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    role: "Rich",
  },
  {
    name: "Spider-man",
    avatar: "https://img.ibxk.com.br/2022/02/15/15164733976434.jpg",
    role: "student",
  },
  {
    name: "Misty",
    avatar:
      "https://w7.pngwing.com/pngs/115/942/png-transparent-misty-ash-ketchum-pokemon-sun-and-moon-brock-misty-pokemon-poster-fictional-character-cartoon-thumbnail.png",
    role: "Pokémon Trainer",
  },
  {
    name: "Venom",
    avatar:
      "https://lumiere-a.akamaihd.net/v1/images/venom_scene_001_59a30e03.jpeg?region=32,1,1426,800&width=960",
    role: "Alien",
  },
];

function generateCard(avatar) {
  const card = `
      <div class="card">
        <img src="${avatar.avatar}" alt="${avatar.name}-Avatar" height="400px" />

        <div class="card-container">
          <h4>
            <strong>${avatar.name}</strong>
          </h4>

          <p>${avatar.role}</p>
        </div>
      </div>
    `;

  return card;
}

const main = document.querySelector("main");

avatars.forEach((avatar) => {
  main.innerHTML += generateCard(avatar);
});
