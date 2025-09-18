// --- Supabase config ---
// Replace with your own Supabase project URL and anon key
const SUPABASE_URL = 'https://fqjzcsfnoolnfigwrlct.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxanpjc2Zub29sbmZpZ3dybGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNzgyNTAsImV4cCI6MjA3Mzc1NDI1MH0.EEvddR4NZuphqRuMvE4yfrb9zR3gmhT9_Fi15cGF69g';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {
    // The complete list of Naruto Shippuden episodes with canon/filler classification.
    const episodes = [
        {"id": 1, "title": "Homecoming", "type": "Canon"},
        {"id": 2, "title": "The Akatsuki Makes Its Move", "type": "Canon"},
        {"id": 3, "title": "The Results of Training", "type": "Canon"},
        {"id": 4, "title": "The Jinchuriki of the Sand", "type": "Canon"},
        {"id": 5, "title": "The Kazekage Stands Tall", "type": "Canon"},
        {"id": 6, "title": "Mission Cleared", "type": "Canon"},
        {"id": 7, "title": "Run, Kankuro", "type": "Canon"},
        {"id": 8, "title": "Team Kakashi, Deployed", "type": "Canon"},
        {"id": 9, "title": "The Jinchuriki's Tears", "type": "Canon"},
        {"id": 10, "title": "Sealing Jutsu: Nine Phantom Dragons", "type": "Canon"},
        {"id": 11, "title": "The Medical Ninja's Student", "type": "Canon"},
        {"id": 12, "title": "The Retired Granny's Determination", "type": "Canon"},
        {"id": 13, "title": "A Meeting With Destiny", "type": "Canon"},
        {"id": 14, "title": "Naruto's Growth", "type": "Canon"},
        {"id": 15, "title": "The Secret Weapon is Called...", "type": "Canon"},
        {"id": 16, "title": "The Secret of Jinchuriki", "type": "Canon"},
        {"id": 17, "title": "The Death of Gaara!", "type": "Canon"},
        {"id": 18, "title": "Charge Tactic! Button Hook Entry!!", "type": "Canon"},
        {"id": 19, "title": "Traps Activate! Team Guy's Enemies", "type": "Canon"},
        {"id": 20, "title": "Hiruko vs. Two Kunoichi!", "type": "Canon"},
        {"id": 21, "title": "Sasori's Real Face", "type": "Canon"},
        {"id": 22, "title": "Chiyo's Secret Skills", "type": "Canon"},
        {"id": 23, "title": "Father and Mother", "type": "Canon"},
        {"id": 24, "title": "The Third Kazekage", "type": "Canon"},
        {"id": 25, "title": "Three Minutes Between Life and Death", "type": "Canon"},
        {"id": 26, "title": "Puppet Fight: 10 vs. 100!", "type": "Canon"},
        {"id": 27, "title": "Impossible Dream", "type": "Canon"},
        {"id": 28, "title": "Beasts: Alive Again!", "type": "Canon"},
        {"id": 29, "title": "Kakashi Enlightened!", "type": "Canon"},
        {"id": 30, "title": "Aesthetics of an Instant", "type": "Canon"},
        {"id": 31, "title": "The Legacy", "type": "Canon"},
        {"id": 32, "title": "Return of the Kazekage", "type": "Canon"},
        {"id": 33, "title": "The New Target", "type": "Canon"},
        {"id": 34, "title": "Formation! New Team Kakashi!", "type": "Canon"},
        {"id": 35, "title": "An Unnecessary Addition", "type": "Canon"},
        {"id": 36, "title": "The Fake Smile", "type": "Canon"},
        {"id": 37, "title": "Untitled", "type": "Canon"},
        {"id": 38, "title": "Simulation", "type": "Canon"},
        {"id": 39, "title": "The Tenchi Bridge", "type": "Canon"},
        {"id": 40, "title": "The Nine-Tails Unleashed", "type": "Canon"},
        {"id": 41, "title": "The Top-Secret Mission Begins", "type": "Canon"},
        {"id": 42, "title": "Orochimaru vs. Jinchuriki", "type": "Canon"},
        {"id": 43, "title": "Sakura's Tears", "type": "Canon"},
        {"id": 44, "title": "The Secret of the Battle!", "type": "Canon"},
        {"id": 45, "title": "The Consequences of Betrayal", "type": "Canon"},
        {"id": 46, "title": "The Unfinished Page", "type": "Canon"},
        {"id": 47, "title": "Infiltration: The Den of the Snake!", "type": "Canon"},
        {"id": 48, "title": "Bonds", "type": "Canon"},
        {"id": 49, "title": "Something Important...", "type": "Canon"},
        {"id": 50, "title": "The Picture Book's Story", "type": "Canon"},
        {"id": 51, "title": "Reunion", "type": "Canon"},
        {"id": 52, "title": "The Power of Uchiha", "type": "Canon"},
        {"id": 53, "title": "Title", "type": "Canon"},
        {"id": 54, "title": "Nightmare", "type": "Mixed Canon/Filler"},
        {"id": 55, "title": "Wind", "type": "Canon"},
        {"id": 56, "title": "Writhe", "type": "Mixed Canon/Filler"},
        {"id": 57, "title": "Deidara's Art", "type": "Filler"},
        {"id": 58, "title": "Raging Mad", "type": "Filler"},
        {"id": 59, "title": "The Unbeatable Enemy", "type": "Filler"},
        {"id": 60, "title": "The Will of Fire", "type": "Filler"},
        {"id": 61, "title": "The Path of a Friend", "type": "Filler"},
        {"id": 62, "title": "The Quietly Approaching Threat", "type": "Filler"},
        {"id": 63, "title": "Akatsuki's Invasion", "type": "Filler"},
        {"id": 64, "title": "Signs of a Friend", "type": "Filler"},
        {"id": 65, "title": "The Underworld's Doings", "type": "Filler"},
        {"id": 66, "title": "The Revived Souls", "type": "Filler"},
        {"id": 67, "title": "Everyone's Struggle to the Death", "type": "Filler"},
        {"id": 68, "title": "The Moment of Awakening", "type": "Filler"},
        {"id": 69, "title": "Despair", "type": "Filler"},
        {"id": 70, "title": "Resonance", "type": "Filler"},
        {"id": 71, "title": "My Friend", "type": "Filler"},
        {"id": 72, "title": "The Quietly Approaching Threat", "type": "Canon"},
        {"id": 73, "title": "Akatsuki's Invasion", "type": "Canon"},
        {"id": 74, "title": "Under the Starry Sky", "type": "Canon"},
        {"id": 75, "title": "The Old Monk's Prayer", "type": "Canon"},
        {"id": 76, "title": "The Next Step", "type": "Canon"},
        {"id": 77, "title": "Climbing Silver", "type": "Canon"},
        {"id": 78, "title": "The Judgment", "type": "Canon"},
        {"id": 79, "title": "Unfulfilled Scream", "type": "Canon"},
        {"id": 80, "title": "Last Words", "type": "Canon"},
        {"id": 81, "title": "Sad News", "type": "Canon"},
        {"id": 82, "title": "Team 10", "type": "Canon"},
        {"id": 83, "title": "Target: Locked On", "type": "Canon"},
        {"id": 84, "title": "Kakuzu's Abilities", "type": "Canon"},
        {"id": 85, "title": "The Terrifying Secret", "type": "Canon"},
        {"id": 86, "title": "Shikamaru's Genius", "type": "Canon"},
        {"id": 87, "title": "When You Curse Someone, You Dig Your Own Grave", "type": "Canon"},
        {"id": 88, "title": "Wind Style: Rasen Shuriken!", "type": "Canon"},
        {"id": 89, "title": "The Price of Power", "type": "Canon"},
        {"id": 90, "title": "A Shinobi's Determination", "type": "Mixed Canon/Filler"},
        {"id": 91, "title": "Orochimaru's Hideout Discovered", "type": "Filler"},
        {"id": 92, "title": "The Encounter", "type": "Filler"},
        {"id": 93, "title": "Connecting Hearts", "type": "Filler"},
        {"id": 94, "title": "A Night of Rain", "type": "Filler"},
        {"id": 95, "title": "The Two Charms", "type": "Filler"},
        {"id": 96, "title": "The Unseen Enemy", "type": "Filler"},
        {"id": 97, "title": "The Labyrinth of Distorted Reflection", "type": "Filler"},
        {"id": 98, "title": "The Target Appears", "type": "Filler"},
        {"id": 99, "title": "The Rampaging Tailed Beast", "type": "Filler"},
        {"id": 100, "title": "Inside the Mist", "type": "Filler"},
        {"id": 101, "title": "Everyone's Feelings", "type": "Filler"},
        {"id": 102, "title": "Regroup!", "type": "Filler"},
        {"id": 103, "title": "The Four-Corner Sealing Barrier", "type": "Filler"},
        {"id": 104, "title": "Breaking the Crystal Style", "type": "Filler"},
        {"id": 105, "title": "The Battle Over the Barrier", "type": "Filler"},
        {"id": 106, "title": "Red Camellia", "type": "Filler"},
        {"id": 107, "title": "Strange Bedfellows", "type": "Filler"},
        {"id": 108, "title": "Guidepost of the Camellia", "type": "Filler"},
        {"id": 109, "title": "Counterattack of the Curse Mark", "type": "Filler"},
        {"id": 110, "title": "Memory of Guilt", "type": "Filler"},
        {"id": 111, "title": "Shattered Promise", "type": "Filler"},
        {"id": 112, "title": "A Place to Return To", "type": "Filler"},
        {"id": 113, "title": "The Serpent's Pupil", "type": "Canon"},
        {"id": 114, "title": "Eye of the Hawk", "type": "Canon"},
        {"id": 115, "title": "Zabuza's Blade", "type": "Mixed Canon/Filler"},
        {"id": 116, "title": "Guardian of the Iron Wall", "type": "Canon"},
        {"id": 117, "title": "Jugo of the Northern Hideout", "type": "Canon"},
        {"id": 118, "title": "Formation!", "type": "Canon"},
        {"id": 119, "title": "Kakashi Chronicles: A Boy's Life on the Battlefield Part 1", "type": "Canon"},
        {"id": 120, "title": "Kakashi Chronicles: A Boy's Life on the Battlefield Part 2", "type": "Canon"},
        {"id": 121, "title": "Assemble", "type": "Canon"},
        {"id": 122, "title": "The Hunt", "type": "Canon"},
        {"id": 123, "title": "Clash!", "type": "Canon"},
        {"id": 124, "title": "Art", "type": "Canon"},
        {"id": 125, "title": "Disappearance", "type": "Canon"},
        {"id": 126, "title": "Twilight", "type": "Canon"},
        {"id": 127, "title": "The Tale of a Gutsy Ninja: Jiraiya Ninja Scrolls Part 1", "type": "Mixed Canon/Filler"},
        {"id": 128, "title": "The Tale of a Gutsy Ninja: Jiraiya Ninja Scrolls Part 2", "type": "Mixed Canon/Filler"},
        {"id": 129, "title": "Infiltrate! The Village Hidden in the Rain", "type": "Canon"},
        {"id": 130, "title": "The Man Who Became God", "type": "Canon"},
        {"id": 131, "title": "Honored Sage Mode!", "type": "Canon"},
        {"id": 132, "title": "In Attendance, the Six Paths of Pain", "type": "Canon"},
        {"id": 133, "title": "The Tale of Jiraiya the Gallant", "type": "Canon"},
        {"id": 134, "title": "Invitation to the Party", "type": "Canon"},
        {"id": 135, "title": "The Longest Moment", "type": "Canon"},
        {"id": 136, "title": "The Light & Dark of the Mangekyo Sharingan", "type": "Canon"},
        {"id": 137, "title": "Amaterasu!", "type": "Canon"},
        {"id": 138, "title": "The End", "type": "Canon"},
        {"id": 139, "title": "The Mystery of Tobi", "type": "Canon"},
        {"id": 140, "title": "Fate", "type": "Canon"},
        {"id": 141, "title": "Truth", "type": "Canon"},
        {"id": 142, "title": "Battle of Unraikyo", "type": "Canon"},
        {"id": 143, "title": "The Eight-Tails vs. Sasuke", "type": "Canon"},
        {"id": 144, "title": "Wanderer", "type": "Filler"},
        {"id": 145, "title": "Successor of the Forbidden Jutsu", "type": "Filler"},
        {"id": 146, "title": "The Successor's Wish", "type": "Filler"},
        {"id": 147, "title": "Rogue Ninja's Past", "type": "Filler"},
        {"id": 148, "title": "Heir to the Darkness", "type": "Filler"},
        {"id": 149, "title": "Separation", "type": "Filler"},
        {"id": 150, "title": "The Forbidden Jutsu Released", "type": "Filler"},
        {"id": 151, "title": "Master and Student", "type": "Filler"},
        {"id": 152, "title": "Somber News", "type": "Canon"},
        {"id": 153, "title": "Following the Master's Shadow", "type": "Canon"},
        {"id": 154, "title": "Decryption", "type": "Canon"},
        {"id": 155, "title": "The First Challenge", "type": "Canon"},
        {"id": 156, "title": "Surpassing the Master", "type": "Canon"},
        {"id": 157, "title": "Assault on the Leaf Village!", "type": "Canon"},
        {"id": 158, "title": "Power to Believe", "type": "Canon"},
        {"id": 159, "title": "Pain vs. Kakashi", "type": "Canon"},
        {"id": 160, "title": "Mystery of Pain", "type": "Canon"},
        {"id": 161, "title": "Surname Is Sarutobi. Given Name, Konohamaru!", "type": "Canon"},
        {"id": 162, "title": "Pain to the World", "type": "Canon"},
        {"id": 163, "title": "Explode! Sage Mode", "type": "Canon"},
        {"id": 164, "title": "Danger! Sage Mode Limit Reached", "type": "Canon"},
        {"id": 165, "title": "Nine-Tails, Captured!", "type": "Canon"},
        {"id": 166, "title": "Confession", "type": "Canon"},
        {"id": 167, "title": "Planetary Devastation", "type": "Canon"},
        {"id": 168, "title": "The Fourth Hokage", "type": "Canon"},
        {"id": 169, "title": "The Two Students", "type": "Canon"},
        {"id": 170, "title": "Big Adventure! The Quest for the Fourth Hokage's Legacy - Part 1", "type": "Filler"},
        {"id": 171, "title": "Big Adventure! The Quest for the Fourth Hokage's Legacy - Part 2", "type": "Filler"},
        {"id": 172, "title": "Meeting", "type": "Canon"},
        {"id": 173, "title": "Origin of Pain", "type": "Canon"},
        {"id": 174, "title": "Tale of Naruto Uzumaki", "type": "Canon"},
        {"id": 175, "title": "Hero of the Hidden Leaf", "type": "Canon"},
                {"id": 176, "title": "Iruka's Ordeal", "type": "Filler"},
        {"id": 177, "title": "Iruka's Decision", "type": "Filler"},
        {"id": 178, "title": "Kakashi Hatake, the Jonin in Charge", "type": "Filler"},
        {"id": 179, "title": "Inari's Courage Put to the Test", "type": "Filler"},
        {"id": 180, "title": "Naruto's School of Revenge", "type": "Filler"},
        {"id": 181, "title": "Gaara's Bond", "type": "Filler"},
        {"id": 182, "title": "Naruto: Outbreak", "type": "Filler"},
        {"id": 183, "title": "Deploy! Team Tenten", "type": "Filler"},
        {"id": 184, "title": "Animal District", "type": "Filler"},
        {"id": 185, "title": "Ah, the Medicine of Youth", "type": "Filler"},
        {"id": 186, "title": "Gutsy Master and Student: The Training", "type": "Filler"},
        {"id": 187, "title": "Record of the Gutsy Ninja Master and Student", "type": "Filler"},
        {"id": 188, "title": "Sasuke's Paw Encyclopedia", "type": "Filler"},
        {"id": 189, "title": "Naruto and the Old Soldier", "type": "Filler"},
        {"id": 190, "title": "Kakashi Love Song", "type": "Filler"},
        {"id": 191, "title": "Neji Chronicles", "type": "Filler"},
        {"id": 192, "title": "The Man Who Died Twice", "type": "Filler"},
        {"id": 193, "title": "The Worst Three-Legged Race", "type": "Filler"},
        {"id": 194, "title": "Team 10's Teamwork", "type": "Filler"},
        {"id": 195, "title": "Drive Towards Darkness", "type": "Filler"},
        {"id": 196, "title": "The 6th Hokage Danzo", "type": "Filler"},
        {"id": 197, "title": "The Five Kage Summit's Eve", "type": "Canon"},
        {"id": 198, "title": "Enter the Five Kage!", "type": "Canon"},
        {"id": 199, "title": "Naruto's Plea", "type": "Canon"},
        {"id": 200, "title": "A Painful Decision", "type": "Canon"},
        {"id": 201, "title": "Racing Lightning", "type": "Canon"},
        {"id": 202, "title": "Sasuke's Ninja Way", "type": "Canon"},
        {"id": 203, "title": "The Five Kage's Power", "type": "Canon"},
        {"id": 204, "title": "Declaration of War", "type": "Canon"},
        {"id": 205, "title": "Sakura's Feelings", "type": "Canon"},
        {"id": 206, "title": "The Tailed Beast vs. The Tailless Tailed Beast", "type": "Canon"},
        {"id": 207, "title": "As One's Friend", "type": "Canon"},
        {"id": 208, "title": "Danzo's Right Arm", "type": "Canon"},
        {"id": 209, "title": "The Forbidden Visual Jutsu", "type": "Canon"},
        {"id": 210, "title": "Danzo Shimura", "type": "Canon"},
        {"id": 211, "title": "Sakura's Resolve", "type": "Canon"},
        {"id": 212, "title": "Lost Bonds", "type": "Canon"},
        {"id": 213, "title": "The Burden", "type": "Canon"},
        {"id": 214, "title": "Two Fates", "type": "Canon"},
        {"id": 215, "title": "High-Level Shinobi", "type": "Canon"},
        {"id": 216, "title": "The Infiltrator", "type": "Canon"},
        {"id": 217, "title": "The Great Nations Mobilize", "type": "Canon"},
        {"id": 218, "title": "Kakashi Hatake, the Hokage", "type": "Canon"},
        {"id": 219, "title": "Prophecy of the Great Lord Elder", "type": "Canon"},
        {"id": 220, "title": "Storage", "type": "Canon"},
        {"id": 221, "title": "The Five Kage's Decision", "type": "Mixed Canon/Filler"},
        {"id": 222, "title": "The Young Man and the Sea", "type": "Filler"},
        {"id": 223, "title": "The Ninja of Benisu", "type": "Filler"},
        {"id": 224, "title": "The Cursed Ghost Ship", "type": "Filler"},
        {"id": 225, "title": "Battleship Island", "type": "Filler"},
        {"id": 226, "title": "The Forgotten Island", "type": "Filler"},
        {"id": 227, "title": "Fight! Rock Lee!", "type": "Filler"},
        {"id": 228, "title": "Eat or Die! Mushrooms from Hell!", "type": "Filler"},
        {"id": 229, "title": "Revolt of the Clones", "type": "Filler"},
        {"id": 230, "title": "The Closed Route", "type": "Filler"},
        {"id": 231, "title": "The Girls' Get-Together", "type": "Filler"},
        {"id": 232, "title": "Naruto's Imposter", "type": "Filler"},
        {"id": 233, "title": "Naruto's Favorite Student", "type": "Filler"},
        {"id": 234, "title": "The Kunoichi of Nadeshiko Village", "type": "Filler"},
        {"id": 235, "title": "Friends You Can Count On", "type": "Filler"},
        {"id": 236, "title": "Ah, My Hero Lady Tsunade!", "type": "Filler"},
        {"id": 237, "title": "Sai's Day Off", "type": "Filler"},
        {"id": 238, "title": "The Legendary Ino-Shika-Cho Trio", "type": "Filler"},
        {"id": 239, "title": "Kiba's Determination", "type": "Filler"},
        {"id": 240, "title": "Kakashi, My Eternal Rival!", "type": "Filler"},
        {"id": 241, "title": "Naruto's Oath", "type": "Filler"},
        {"id": 242, "title": "Land Ahoy! Is it Paradise? The Ship to Paradise!", "type": "Filler"},
        {"id": 243, "title": "The Fourth Great Ninja War Begins!", "type": "Canon"},
        {"id": 244, "title": "The Counter-Attack of the Kage", "type": "Canon"},
        {"id": 245, "title": "Battle in Paradise! The Odd-Tailed Beast vs. The Monster", "type": "Canon"},
        {"id": 246, "title": "The Orange Spark", "type": "Canon"},
        {"id": 247, "title": "Target: Nine-Tails", "type": "Canon"},
        {"id": 248, "title": "The Fourth Hokage's Death Match!", "type": "Canon"},
        {"id": 249, "title": "Thank You", "type": "Canon"},
        {"id": 250, "title": "The Battle in Paradise! Odd-Tailed Beast vs. The Monster!", "type": "Canon"},
        {"id": 251, "title": "The Man Named Kisame", "type": "Canon"},
        {"id": 252, "title": "The Angelic Herald of Death", "type": "Canon"},
        {"id": 253, "title": "The Bridge to Peace", "type": "Canon"},
        {"id": 254, "title": "The Super S-Rank Secret Mission", "type": "Canon"},
        {"id": 255, "title": "The Artist Returns", "type": "Canon"},
        {"id": 256, "title": "Assemble! The Allied Shinobi Forces!", "type": "Canon"},
        {"id": 257, "title": "The Unforgettable", "type": "Mixed Canon/Filler"},
        {"id": 258, "title": "Rivals", "type": "Mixed Canon/Filler"},
        {"id": 259, "title": "Rift", "type": "Mixed Canon/Filler"},
        {"id": 260, "title": "Parting", "type": "Mixed Canon/Filler"},
        {"id": 261, "title": "For My Friend", "type": "Canon"},
        {"id": 262, "title": "War Begins", "type": "Canon"},
        {"id": 263, "title": "Sai and Shin", "type": "Canon"},
        {"id": 264, "title": "Secrets of the Reanimation Jutsu", "type": "Canon"},
        {"id": 265, "title": "An Old Nemesis Returns", "type": "Canon"},
        {"id": 266, "title": "The First and Last Opponent", "type": "Canon"},
        {"id": 267, "title": "The Brilliant Military Strategist of the Hidden Leaf", "type": "Canon"},
        {"id": 268, "title": "Battleground!", "type": "Canon"},
        {"id": 269, "title": "Forbidden Words", "type": "Canon"},
        {"id": 270, "title": "Golden Bonds", "type": "Canon"},
        {"id": 271, "title": "Road to Sakura", "type": "Filler"},
        {"id": 272, "title": "Mifune vs. Hanzo", "type": "Canon"},
        {"id": 273, "title": "True Kindness", "type": "Canon"},
        {"id": 274, "title": "The Complete Ino-Shika-Cho Formation!", "type": "Canon"},
        {"id": 275, "title": "A Letter from the Heart", "type": "Canon"},
                {"id": 276, "title": "The Gedo Mazo Strikes", "type": "Canon"},
        {"id": 277, "title": "The Sign of Harmony", "type": "Canon"},
        {"id": 278, "title": "The Targeted Medical Ninja", "type": "Canon"},
        {"id": 279, "title": "The White Zetsu's Trap", "type": "Filler"},
        {"id": 280, "title": "The Aesthetics of an Artist", "type": "Filler"},
        {"id": 281, "title": "The Allied Mom Force!!", "type": "Filler"},
        {"id": 282, "title": "The Secret Origin of the Ultimate Tag Team!", "type": "Canon"},
        {"id": 283, "title": "Two Suns", "type": "Canon"},
        {"id": 284, "title": "The Helmet-Splitting Kabuto", "type": "Mixed Canon/Filler"},
        {"id": 285, "title": "User of the Scorch Style!", "type": "Mixed Canon/Filler"},
        {"id": 286, "title": "Things You Can't Get Back", "type": "Filler"},
        {"id": 287, "title": "One Worth Betting On", "type": "Filler"},
        {"id": 288, "title": "Danger: Jinpachi and Kushimaru!", "type": "Filler"},
        {"id": 289, "title": "The Lightning Blade: Ameyuri Ringo!", "type": "Filler"},
        {"id": 290, "title": "Power - Episode 1", "type": "Filler"},
        {"id": 291, "title": "Power - Episode 2", "type": "Filler"},
        {"id": 292, "title": "Power - Episode 3", "type": "Filler"},
        {"id": 293, "title": "Power - Episode 4", "type": "Filler"},
        {"id": 294, "title": "Power - Episode 5", "type": "Filler"},
        {"id": 295, "title": "Power - Final Episode", "type": "Filler"},
        {"id": 296, "title": "Naruto Enters the War", "type": "Canon"},
        {"id": 297, "title": "A Father's Hope, a Mother's Love", "type": "Canon"},
        {"id": 298, "title": "Contact! Naruto vs. Itachi", "type": "Canon"},
        {"id": 299, "title": "The Acknowledged One", "type": "Canon"},
        {"id": 300, "title": "The Mizukage, the Giant Clam, and the Mirage", "type": "Canon"},
        {"id": 301, "title": "Paradox", "type": "Canon"},
        {"id": 302, "title": "Terror: The Steam Imp", "type": "Canon"},
        {"id": 303, "title": "Ghosts from the Past", "type": "Mixed Canon/Filler"},
        {"id": 304, "title": "The Underworld Transfer Jutsu", "type": "Mixed Canon/Filler"},
        {"id": 305, "title": "The Vengeful", "type": "Mixed Canon/Filler"},
        {"id": 306, "title": "The Heart's Eye", "type": "Mixed Canon/Filler"},
        {"id": 307, "title": "Fade into the Moonlight", "type": "Mixed Canon/Filler"},
        {"id": 308, "title": "Night of the Crescent Moon", "type": "Mixed Canon/Filler"},
        {"id": 309, "title": "An A-Rank Mission: The Noble Takedown", "type": "Mixed Canon/Filler"},
        {"id": 310, "title": "The Fallen Castle", "type": "Mixed Canon/Filler"},
        {"id": 311, "title": "Prologue of Road to Ninja", "type": "Filler"},
        {"id": 312, "title": "The Old Master and the Dragon's Eye", "type": "Mixed Canon/Filler"},
        {"id": 313, "title": "Rain Followed by Snow, with Some Lightning", "type": "Mixed Canon/Filler"},
        {"id": 314, "title": "The Sad Sun Shower", "type": "Mixed Canon/Filler"},
        {"id": 315, "title": "Lingering Snow", "type": "Mixed Canon/Filler"},
        {"id": 316, "title": "The Reanimated Allied Forces", "type": "Mixed Canon/Filler"},
        {"id": 317, "title": "Shino vs. Torune!", "type": "Mixed Canon/Filler"},
        {"id": 318, "title": "A Hole in the Heart: The Other Jinchuriki", "type": "Mixed Canon/Filler"},
        {"id": 319, "title": "The Soul Living Inside the Puppet", "type": "Mixed Canon/Filler"},
        {"id": 320, "title": "Run, Omoi!", "type": "Mixed Canon/Filler"},
        {"id": 321, "title": "Reinforcements Arrive", "type": "Canon"},
        {"id": 322, "title": "Madara Uchiha", "type": "Canon"},
        {"id": 323, "title": "The Five Kage Assemble", "type": "Canon"},
        {"id": 324, "title": "The Unbreakable Mask and the Shattered Bubble", "type": "Canon"},
        {"id": 325, "title": "Jinchuriki vs. Jinchuriki!", "type": "Canon"},
        {"id": 326, "title": "Four-Tails: The King of Sage Monkeys", "type": "Canon"},
        {"id": 327, "title": "Nine-Tails", "type": "Mixed Canon/Filler"},
        {"id": 328, "title": "Kurama", "type": "Mixed Canon/Filler"},
        {"id": 329, "title": "Two-Man Team", "type": "Canon"},
        {"id": 330, "title": "The Promise of Victory", "type": "Canon"},
        {"id": 331, "title": "Eyes That See in the Dark", "type": "Canon"},
        {"id": 332, "title": "A Will of Stone", "type": "Canon"},
        {"id": 333, "title": "The Risks of the Reanimation Jutsu", "type": "Canon"},
        {"id": 334, "title": "Sibling Tag Team", "type": "Canon"},
        {"id": 335, "title": "To Each Their Own Leaf", "type": "Canon"},
        {"id": 336, "title": "Kabuto Yakushi", "type": "Canon"},
        {"id": 337, "title": "The Izanami Activated", "type": "Canon"},
        {"id": 338, "title": "Izanagi and Izanami", "type": "Canon"},
        {"id": 339, "title": "I Will Love You Always", "type": "Canon"},
        {"id": 340, "title": "Reanimation Jutsu: Release!", "type": "Canon"},
        {"id": 341, "title": "He Who Will Not Die", "type": "Canon"},
        {"id": 342, "title": "The Secret of the Transportation Technique", "type": "Canon"},
        {"id": 343, "title": "Who Are You?", "type": "Canon"},
        {"id": 344, "title": "Obito and Madara", "type": "Canon"},
        {"id": 345, "title": "I'm in Hell", "type": "Canon"},
        {"id": 346, "title": "World of Dreams", "type": "Canon"},
        {"id": 347, "title": "A Shadow of a Creeping Figure", "type": "Filler"},
        {"id": 348, "title": "The Akatsuki, Reborn", "type": "Filler"},
        {"id": 349, "title": "The Mask that Hides the Heart", "type": "Filler"},
        {"id": 350, "title": "Minato's Death", "type": "Filler"},
        {"id": 351, "title": "Hashirama's Cells", "type": "Filler"},
        {"id": 352, "title": "The Rogue Ninja: Orochimaru", "type": "Filler"},
        {"id": 353, "title": "Orochimaru's Test Subject", "type": "Filler"},
        {"id": 354, "title": "Their Own Paths", "type": "Filler"},
        {"id": 355, "title": "The Targeted Sharingan", "type": "Filler"},
        {"id": 356, "title": "A Shinobi of the Leaf", "type": "Filler"},
        {"id": 357, "title": "An Uchiha ANBU", "type": "Filler"},
        {"id": 358, "title": "Coup d'État", "type": "Filler"},
        {"id": 359, "title": "The Night of the Tragedy", "type": "Filler"},
        {"id": 360, "title": "Jonin Leader", "type": "Filler"},
        {"id": 361, "title": "Team 7", "type": "Filler"},
        {"id": 362, "title": "Kakashi's Resolve", "type": "Canon"},
        {"id": 363, "title": "The Allied Shinobi Forces Jutsu", "type": "Canon"},
        {"id": 364, "title": "The Ties That Bind", "type": "Canon"},
        {"id": 365, "title": "Those Who Dance in the Shadows", "type": "Canon"},
        {"id": 366, "title": "The All-Knowing", "type": "Canon"},
        {"id": 367, "title": "Hashirama and Madara", "type": "Canon"},
        {"id": 368, "title": "The Era of Warring States", "type": "Canon"},
        {"id": 369, "title": "My True Dream", "type": "Canon"},
        {"id": 370, "title": "Sasuke's Answer", "type": "Canon"},
        {"id": 371, "title": "Hole", "type": "Canon"},
        {"id": 372, "title": "Something to Fill the Hole", "type": "Canon"},
        {"id": 373, "title": "Team 7, Assemble!", "type": "Canon"},
        {"id": 374, "title": "The New Three-Way Deadlock", "type": "Canon"},
        {"id": 375, "title": "Kakashi vs. Obito", "type": "Canon"},
        {"id": 376, "title": "The Directive to Take the Nine-Tails!", "type": "Mixed Canon/Filler"},
                {"id": 377, "title": "Naruto vs. Mecha Naruto", "type": "Filler"},
        {"id": 378, "title": "The Ten-Tails' Jinchuriki", "type": "Canon"},
        {"id": 379, "title": "An Opening", "type": "Canon"},
        {"id": 380, "title": "The Day Naruto Was Born", "type": "Canon"},
        {"id": 381, "title": "The Divine Tree", "type": "Canon"},
        {"id": 382, "title": "A Shinobi's Dream", "type": "Canon"},
        {"id": 383, "title": "Pursuing Hope", "type": "Canon"},
        {"id": 384, "title": "A Heart Filled With Comrades", "type": "Canon"},
        {"id": 385, "title": "Obito Uchiha", "type": "Canon"},
        {"id": 386, "title": "I'm Always Watching", "type": "Canon"},
        {"id": 387, "title": "The Promised Victory", "type": "Canon"},
        {"id": 388, "title": "My First Friend", "type": "Canon"},
        {"id": 389, "title": "The Adored Elder Sister", "type": "Filler"},
        {"id": 390, "title": "Hanabi's Decision", "type": "Filler"},
        {"id": 391, "title": "Madara Uchiha, Arise", "type": "Canon"},
        {"id": 392, "title": "The Heart's Hidden Hole", "type": "Canon"},
        {"id": 393, "title": "A True Ending", "type": "Canon"},
        {"id": 394, "title": "The New Chunin Exams", "type": "Filler"},
        {"id": 395, "title": "The Chunin Exams, Begin!", "type": "Filler"},
        {"id": 396, "title": "The Three Problems", "type": "Filler"},
        {"id": 397, "title": "The One Fit to be Leader", "type": "Filler"},
        {"id": 398, "title": "The Night Before the Second Exam", "type": "Filler"},
        {"id": 399, "title": "Demon Desert Survival", "type": "Filler"},
        {"id": 400, "title": "As a Taijutsu User", "type": "Filler"},
        {"id": 401, "title": "The Ultimate", "type": "Filler"},
        {"id": 402, "title": "Escape vs. Pursuit", "type": "Filler"},
        {"id": 403, "title": "Unwavering Gutsiness", "type": "Filler"},
        {"id": 404, "title": "Tenten's Troubles", "type": "Filler"},
        {"id": 405, "title": "The Imprisoned Pair", "type": "Filler"},
        {"id": 406, "title": "The Place Where I Belong", "type": "Filler"},
        {"id": 407, "title": "The Yamanaka Clan's Secret Ninjutsu", "type": "Filler"},
        {"id": 408, "title": "The Cursed Puppet", "type": "Filler"},
        {"id": 409, "title": "Their Backs", "type": "Filler"},
        {"id": 410, "title": "The Scheming Begins", "type": "Filler"},
        {"id": 411, "title": "The Targeted Tailed Beast", "type": "Filler"},
        {"id": 412, "title": "Neji's Judgment", "type": "Filler"},
        {"id": 413, "title": "Hoping for the Future", "type": "Filler"},
        {"id": 414, "title": "On the Brink of Death", "type": "Canon"},
        {"id": 415, "title": "The Two Mangekyo", "type": "Canon"},
        {"id": 416, "title": "The Formation of Team Minato", "type": "Filler"},
        {"id": 417, "title": "You'll Be My Backup", "type": "Canon"},
        {"id": 418, "title": "The Blue Beast vs. Madara of the Six Paths", "type": "Canon"},
        {"id": 419, "title": "Papa's Youth", "type": "Canon"},
        {"id": 420, "title": "The Eight Inner Gates Formation", "type": "Canon"},
        {"id": 421, "title": "The Sage of the Six Paths", "type": "Canon"},
        {"id": 422, "title": "The Ones Who Will Inherit", "type": "Mixed Canon/Filler"},
        {"id": 423, "title": "Naruto's Rival", "type": "Mixed Canon/Filler"},
        {"id": 424, "title": "To Rise Up", "type": "Canon"},
        {"id": 425, "title": "The Infinite Dream", "type": "Canon"},
        {"id": 426, "title": "The Infinite Tsukuyomi", "type": "Canon"},
        {"id": 427, "title": "To the Dream World", "type": "Filler"},
        {"id": 428, "title": "Where Tenten Belongs", "type": "Filler"},
        {"id": 429, "title": "Killer Bee Rappuden: Part 1", "type": "Filler"},
        {"id": 430, "title": "Killer Bee Rappuden: Part 2", "type": "Filler"},
        {"id": 431, "title": "To See That Smile, Just One More Time", "type": "Filler"},
        {"id": 432, "title": "The Loser Ninja", "type": "Filler"},
        {"id": 433, "title": "The Search Mission", "type": "Filler"},
        {"id": 434, "title": "Team Jiraiya", "type": "Filler"},
        {"id": 435, "title": "Order of Priority", "type": "Filler"},
        {"id": 436, "title": "The Masked Man", "type": "Filler"},
        {"id": 437, "title": "The Sealed Power", "type": "Filler"},
        {"id": 438, "title": "The Rules or a Comrade?", "type": "Filler"},
        {"id": 439, "title": "The Child of Prophecy", "type": "Filler"},
        {"id": 440, "title": "The Caged Bird", "type": "Filler"},
        {"id": 441, "title": "Returning Home", "type": "Filler"},
        {"id": 442, "title": "The Mutual Path", "type": "Filler"},
        {"id": 443, "title": "The Difference in Power", "type": "Filler"},
        {"id": 444, "title": "The Rogue Ninja", "type": "Filler"},
        {"id": 445, "title": "The Pursuer", "type": "Filler"},
        {"id": 446, "title": "The Collision", "type": "Filler"},
        {"id": 447, "title": "The Other Moon", "type": "Filler"},
        {"id": 448, "title": "Comrade", "type": "Filler"},
        {"id": 449, "title": "The Shinobi Unite", "type": "Filler"},
        {"id": 450, "title": "Rival", "type": "Filler"},
        {"id": 451, "title": "Birth and Death", "type": "Canon"},
        {"id": 452, "title": "The Genius", "type": "Filler"},
        {"id": 453, "title": "The Pain of Living", "type": "Filler"},
        {"id": 454, "title": "Shisui's Request", "type": "Filler"},
        {"id": 455, "title": "Moonlit Night", "type": "Canon"},
        {"id": 456, "title": "The Darkness of the Akatsuki", "type": "Filler"},
        {"id": 457, "title": "Partner", "type": "Filler"},
        {"id": 458, "title": "Truth", "type": "Canon"},
        {"id": 459, "title": "She of the Beginning", "type": "Canon"},
        {"id": 460, "title": "Kaguya Otsutsuki", "type": "Canon"},
        {"id": 461, "title": "Hagoromo and Hamura", "type": "Canon"},
        {"id": 462, "title": "A Fabricated Past", "type": "Canon"},
        {"id": 463, "title": "The No. 1 Most Unpredictable Ninja", "type": "Canon"},
        {"id": 464, "title": "Ninshu: The Ninja Creed", "type": "Mixed Canon/Filler"},
        {"id": 465, "title": "Ashura and Indra", "type": "Mixed Canon/Filler"},
        {"id": 466, "title": "The Tumultuous Journey", "type": "Mixed Canon/Filler"},
        {"id": 467, "title": "Ashura's Decision", "type": "Mixed Canon/Filler"},
        {"id": 468, "title": "The Successor", "type": "Mixed Canon/Filler"},
        {"id": 469, "title": "A Special Mission", "type": "Filler"},
        {"id": 470, "title": "Connecting Thoughts", "type": "Canon"},
        {"id": 471, "title": "The Two of Them, Always", "type": "Canon"},
        {"id": 472, "title": "You Better...", "type": "Canon"},
        {"id": 473, "title": "The Sharingan, Revived", "type": "Canon"},
        {"id": 474, "title": "Congratulations", "type": "Canon"},
        {"id": 475, "title": "The Final Valley", "type": "Canon"},
        {"id": 476, "title": "The Final Battle", "type": "Canon"},
        {"id": 477, "title": "Naruto and Sasuke", "type": "Canon"},
        {"id": 478, "title": "The Unison Sign", "type": "Canon"},
        {"id": 479, "title": "Naruto Uzumaki!!", "type": "Canon"},
        {"id": 480, "title": "NARUTO / HINATA", "type": "Filler"},
        {"id": 481, "title": "SASUKE / SAKURA", "type": "Filler"},
        {"id": 482, "title": "GAARA / SHIKAMARU", "type": "Filler"},
        {"id": 483, "title": "JIRAIYA / KAKASHI", "type": "Filler"},
        {"id": 484, "title": "The Exploding Human", "type": "Canon"},
        {"id": 485, "title": "Colosseum", "type": "Canon"},
        {"id": 486, "title": "Fūshin", "type": "Canon"},
        {"id": 487, "title": "The Ketsuryūgan", "type": "Canon"},
        {"id": 488, "title": "The Last One", "type": "Canon"},
        {"id": 489, "title": "The State of Affairs", "type": "Canon"},
        {"id": 490, "title": "Dark Clouds", "type": "Canon"},
        {"id": 491, "title": "Recklessness", "type": "Canon"},
        {"id": 492, "title": "Cloud of Suspicion", "type": "Canon"},
        {"id": 493, "title": "Dawn", "type": "Canon"},
        {"id": 494, "title": "Naruto's Wedding", "type": "Canon"},
        {"id": 495, "title": "A Full-Powered Wedding Gift", "type": "Canon"},
        {"id": 496, "title": "Steam and Food Pills", "type": "Canon"},
        {"id": 497, "title": "The Kazekage's Wedding Gift", "type": "Canon"},
        {"id": 498, "title": "The Last Mission", "type": "Canon"},
        {"id": 499, "title": "The Secret Mission's Outcome", "type": "Canon"},
        {"id": 500, "title": "The Message", "type": "Canon"}
    ];

    const episodeListContainer = document.getElementById('episode-list-container');
    const fillerToggle = document.getElementById('filler-toggle');
    const authSection = document.getElementById('auth-section');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const authMessage = document.getElementById('auth-message');

    let watchedEpisodes = new Set();
    let showFiller = fillerToggle.checked;
    let currentUser = null;

    // --- Auth Handlers ---
    loginBtn.onclick = async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            authMessage.textContent = error.message;
        } else {
            authMessage.textContent = '';
            await checkAuthAndLoad();
        }
    };

    signupBtn.onclick = async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            authMessage.textContent = error.message;
        } else {
            authMessage.textContent = 'Check your email to confirm your signup!';
        }
    };

    logoutBtn.onclick = async () => {
        await supabase.auth.signOut();
        currentUser = null;
        watchedEpisodes = new Set();
        showAuthUI();
        renderEpisodes();
    };

    function showAuthUI() {
        authSection.style.display = '';
        logoutBtn.style.display = 'none';
    }

    function showEpisodesUI() {
        authSection.style.display = 'none';
        logoutBtn.style.display = '';
    }

    async function checkAuthAndLoad() {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            currentUser = user;
            showEpisodesUI();
            await loadWatchedEpisodes();
        } else {
            currentUser = null;
            showAuthUI();
        }
        renderEpisodes();
    }

    async function loadWatchedEpisodes() {
        watchedEpisodes = new Set();
        if (!currentUser) return;
        const { data, error } = await supabase
            .from('watched_episodes')
            .select('episode_id')
            .eq('user_id', currentUser.id);
        if (data) {
            data.forEach(row => watchedEpisodes.add(Number(row.episode_id)));
        }
    }

    async function toggleWatched(episodeId) {
        if (!currentUser) return;
        if (watchedEpisodes.has(episodeId)) {
            // Remove from watched
            await supabase
                .from('watched_episodes')
                .delete()
                .eq('user_id', currentUser.id)
                .eq('episode_id', episodeId);
            watchedEpisodes.delete(episodeId);
        } else {
            // Add to watched
            await supabase
                .from('watched_episodes')
                .insert({ user_id: currentUser.id, episode_id: episodeId });
            watchedEpisodes.add(episodeId);
        }
        renderEpisodes();
    }

    function renderEpisodes() {
        episodeListContainer.innerHTML = '';
        const filteredEpisodes = episodes.filter(ep => showFiller || ep.type !== 'Filler');
        filteredEpisodes.forEach(episode => {
            const isWatched = watchedEpisodes.has(episode.id);
            const card = document.createElement('div');
            card.className = `episode-card ${episode.type.toLowerCase().replace('/', '-')} ${isWatched ? 'watched' : ''}`;
            card.style.position = 'relative';
            card.innerHTML = `
                <span class="watched-indicator">巻</span> 
                <div class="episode-title">${episode.title}</div>
                <div class="episode-info">
                    <span>Episode ${episode.id}</span>
                    <span>${episode.type}</span>
                </div>
            `;
            if (currentUser) {
                card.addEventListener('click', () => toggleWatched(episode.id));
                card.style.cursor = 'pointer';
            } else {
                card.style.opacity = 0.5;
                card.title = 'Login to track progress';
            }
            episodeListContainer.appendChild(card);
        });
    }

    fillerToggle.addEventListener('change', (e) => {
        showFiller = e.target.checked;
        renderEpisodes();
    });

    // On load, check auth and load watched episodes
    checkAuthAndLoad();
});