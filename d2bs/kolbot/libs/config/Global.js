// 전역 설정 파일

/* 간단한 지침 :
 * 메모장 ++는 이러한 파일을 편집하는 데 사용하는 것이 좋습니다. http://notepad-plus-plus.org/를 방문하십시오.
 * 무언가를 주석 처리하려면 //를 줄 앞에 놓으십시오.
 * !!! 당신이 확실하지 않은 것을 주석 처리하지 말고, 사용하지 않으려면 설명에 명시된대로 false로 설정하거나 비활성화하십시오.
 * true와 false는 대소 문자를 구분합니다. 양호 : Config.SomeVar = true;  불량 : Config.SomeVar = True;
 */

function LoadConfig() {
	/* 시퀀스 구성
	 * 실행하려면 true로 설정하고, 그렇지 않으면 false로 설정하십시오.
	 * 스크립트 순서를 변경하려면 잘라내기 및 붙여넣기를 사용하여 줄 순서를 변경하십시오.
	 */

	// 사용자 애드온 스크립트. libs/bots/UserAddon.js의 설명을 읽으십시오
	
	//보스몹/사냥터스크립트를실행하려면반드시‘false’로변경
	Scripts.UserAddon = false; // !!! 보스/영역 스크립트를 실행하려면 false로 설정해야합니다 !!!
	
	// 배틀 오더 스크립트 - 2 이상의 캐릭에 사용 (예 : BO barb + sorc)
	Scripts.BattleOrders = false;
		Config.BattleOrders.Mode = 0; // 0 = BO 제공, 1 = BO 획득
		Config.BattleOrders.Idle = false; // BO를 받은 플레이어가 떠날 때까지 대기합니다.
		Config.BattleOrders.Getters = [""]; // 배틀 오더(모드 0)를 캐스팅하기 전에 대기할 플레이어 목록. 모든 선수는 BOER와 같은 구역에 있어야 한다.
		Config.BattleOrders.QuitOnFailure = false; // BO가 실패하면 게임을 종료
		Config.BattleOrders.SkipIfTardy = true; // 다른 플레이어가 이미 BO 자리에서 이동 한 경우 스크립트로 진행
		Config.BattleOrders.Wait = 10; // 플레이어가 게임에 참여할 때까지 기다리는 시간 (초기 값 : 10)
	Scripts.BoBarbHelper = false; // 바바리안 전용 스크립트. 특정 웨이포인트에서 기다리면서 다른캐릭터에게 오더만 줍니다.
		Config.BoBarbHelper.Mode = -1; // 0 = BO 제공, -1 = 비활성화
		Config.BoBarbHelper.Wp = 35; // 대기할 웨이포인트 지역 / 35 = Catacombs level 2

	// 팀플사냥 MF설정
	Config.MFLeader = false; // 보조 캐릭터(MFHelpers)가 있는 리더 캐릭터 일때에만"true"로설정, 타운포탈(TP)을 열어주고 명령을 내립니다. 부기사/쫄봇캐릭터:"false",봇솔플시:"false"
	Scripts.MFHelper = false; // MFLeader와 팀플을 합니다. 리더는 Config.MFLeader = true 로 설정해야 합니다. 팀플시설정,기사는항상:false,부기사나쫄봇은true로. *MF(MagicFind;앵벌)
		Config.BreakClearLevel = false; // 리더가 다른 지역으로 이동하면 현재 진행중인 ClearLevel을(던전사냥) 중지합니다.
		
	/* ### 리칭 섹션 ###
	* 달리 명시되지 않는 한, 리더의 캐릭터 이름은 달리기 위해 필요하지 않습니다.
	* 같은 유형의 스크립트를 더 사용하지 마십시오! 예) AutoBaal 과 BaalHelper 동시실행
	*/

	Config.Leader = ""; // 리더의 이름(MFLeader). 자동 탐지를 시도하려면 비워 두십시오. (AutoBaal,Wakka,MFHelper에서 작동함)
	Config.QuitList = [""]; // 같이 종료할 캐릭터 이름. 예제: Config.QuitList = ["MySorc", "MyDin"];
	Config.QuitListMode = 0; // 0 = 캐릭터이름 사용; 1 = 프로필이름 사용 (모든 프로필은 동일한 컴퓨터에서 실행해야 함).
	Config.QuitListDelay = []; // Config.QuitList 종료시 무작위 시간지연 설정, 예제: Config.QuitListDelay = [1, 10]; 1초에서 10초 사이에 무작위 지연 종료를 합니다.
	
	// 보스/지역 스크립트

	// *** 액트 1 ***
	Scripts.Corpsefire = false;  // 불타는시체(덴오브이블) 
		Config.Corpsefire.ClearDen = false;  // 덴오브이블 모든 몹처치
	Scripts.Mausoleum = false;  // 머설리움  
		Config.Mausoleum.KillBloodRaven = false;  // 블러드레이븐 처치 
		Config.Mausoleum.ClearCrypt = false;  // 크립트 모든 몹 처치 
	Scripts.Rakanishu = false;  // 라카니슈(스토니필드 케른스톤)
		Config.Rakanishu.KillGriswold = true;  //그리스월드처치 (트리스트럼)
	Scripts.UndergroundPassage = false;  // 지하통로
	Scripts.Coldcrow = false;  // 콜트크로우(콜드플레인케이브1층)
	Scripts.Tristram = false;  // 트리스트럼
		Config.Tristram.WalkClear = false; // 쫄캐릭터(MFHelper) 보호를 위해 텔레포트 금지
		Config.Tristram.PortalLeech = false; // 쫄캐릭터를 위한 포탈을 엽니다.
	Scripts.Pit = false;  // 피트
		Config.Pit.ClearPit1 = true;  // 피트 1층 모든 몹 처치
	Scripts.Treehead = false;  // 트리헤드 우드피스트(다크우드 스크롤 나무지킴이)
	Scripts.Smith = false;  // 스미스 (병영)
	Scripts.BoneAsh = false;  // 본애쉬 (대성당)
	Scripts.Countess = false;  // 카운테스 (포가튼타워 5층)
		Config.Countess.KillGhosts = false;  // 포가튼타워내 고스트처치
	Scripts.Andariel = false;  // 안다리엘
	Scripts.Cows = false;  // 시크리트 카우 레벨

	// *** 액트 2 ***
	Scripts.Radament = false;  // 라다먼트 (하수구 3층)
	Scripts.Coldworm = false;  // 콜드웜 버로워 (마고트동굴 3층)
		Config.Coldworm.KillBeetleburst = false;  // 비틀버스 트처치(파오아시스)
		Config.Coldworm.ClearMaggotLair = false; // 마고트동굴 3층 모든 몹 처치
	Scripts.AncientTunnels = false;  // 고대수로
		Config.AncientTunnels.OpenChest = false; // 고대 수로 가는 길목에 있는 상자열기
		Config.AncientTunnels.KillDarkElder = false;  // 다크엘더 처치
	Scripts.Summoner = false;  // 소환술사
		Config.Summoner.FireEye = false;  // 파이어아이 처치 (궁전지하3층)
	Scripts.Tombs = false;  // 탈라샤의 무덤
	Scripts.Duriel = false;  // 듀리엘

	// *** act 3 ***
	Scripts.Stormtree = false;  // 스톰트리 (남부쿠라스트로 가는 길목)
	Scripts.KurastTemples = false;  // 쿠라스트 사원
	Scripts.Icehawk = false;  // 아이스호크 리프트윙(하수구)
	Scripts.Endugu = false;  // 마법사 엔두구(프레이어던전3층)
	Scripts.Travincal = false;  // 트라빈컬
		Config.Travincal.PortalLeech = false; // 쫄캐릭터를 위한 포탈을 엽니다.
	Scripts.Mephisto = false;  // 메피스토
		Config.Mephisto.MoatTrick = false;  // 강건너 불구경으로 메피스토잡기
		Config.Mephisto.KillCouncil = false;  // 증오의 사원 3층내 카운슬 멤버 처치
		Config.Mephisto.TakeRedPortal = true;  // 4막으로 이동하는 빨간 포탈 이용하기

	// *** act 4 ***
	Scripts.OuterSteppes = false;
	Scripts.Izual = false;  // 이주얼 (절망의평원)
	Scripts.Hephasto = false;  // 대장장이 헤파스토(불길의강,헬포지)
		Config.Hephasto.ClearRiver = false; // Clear river after killing Hephasto
		Config.Hephasto.ClearType = 0xF; // 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Scripts.Vizier = false; // Intended for classic sorc, kills Vizier only. 오리 소서 해당,비지어(카오스좌측씨일몹)만처치.
	Scripts.FastDiablo = false;  // 디아블로 빠른처치
	Scripts.Diablo = false;  // 디아블로
		Config.Diablo.WalkClear = false; // Disable teleport while clearing to protect leechers 리처를 보호하고자 텔레포트 금지
		Config.Diablo.Entrance = true; // 카오스 생츄어리 입구에서부터 시작합니다.
//		Config.Diablo.SealWarning = ["Leave the seals alone!"]; // 따옴표 내에 씨일 경고 안내문 입력
//		Config.Diablo.EntranceTP = ["카오스 생츄어리 입구에 타운포탈을 엽니다. (안전함)"]; // 따옴표 내에 최초 포탈 열 때의 안내문 입력
//		Config.Diablo.StarTP = ["카오스 생츄어리 중앙에 타운포탈을 엽니다. (위험함 ->> 1시,5시 방향 주의바람)"]; // 따옴표 내에 별모양 지형 (디아등장위치)에 포탈 열 때의 안내문 입력
//		Config.Diablo.DiabloMsg = ["카오스 생츄어리 중앙에 쥐아블로 출현! (위험함)"]; // 따옴표 내에 디아블로 소환 직전 안내문 입력
		Config.Diablo.SealOrder = ["vizier", "seis", "infector"]; // the order in which to clear the seals. If seals are excluded, they won't be checked unless diablo fails to appear
	Scripts.SealLeader = false; // Clear a safe spot around seals and invite leechers in. Leechers should run SealLeecher script. Don't run with Diablo or FastDiablo.
								// 카오스 씨일 주변몹 처치후 안전한 상태에서 리처 초대. Diablo 와 FastDiablo 둘중 하나만 선택 하여야함.(false권장)
	// *** act 5 ***
	Scripts.Pindleskin = false;  // 핀들스킨
		Config.Pindleskin.UseWaypoint = false;  // 핀들 스킨 사냥시 웨이포인트 사용여부
		Config.Pindleskin.KillNihlathak = true;  // 핀들 스킨 처치후 니라트하크 잡기
		Config.Pindleskin.ViperQuit = false; // End script if Tomb Vipers are found. 핀들 스킨 사냥시 바이퍼 발견되면 사냥포기
	Scripts.Nihlathak = false;  // 니라트하크
		Config.Nihlathak.ViperQuit = false; // End script if Tomb Vipers are found. 홀스오브보우트 에서 바이퍼 발견되면 사냥포기
	Scripts.Eldritch = false;  // 엘드리치 더 랙터파이어(프리지드 하이랜드 웨이 바로 위)
		Config.Eldritch.OpenChest = true;  // 상자 열기
		Config.Eldritch.KillShenk = true;  // 엘드리치 사냥시 쉔크 더 오버시어 잡기(블러디풋힐)
		Config.Eldritch.KillDacFarren = true;  // 엘드리치 사냥시 덱 패른 잡기(블러디풋힐)
	Scripts.Eyeback = false;  // 아이백 언리쉬드(프리지드 하이랜드와 아리앗 고원 경계)
	Scripts.SharpTooth = false;  // 샤프투쓰 슬레이어(프리지드 하이랜드 감옥지킴이)
	Scripts.ThreshSocket = false;  // 쓰레쉬 소켓(아리앗고원, 크리스탈라인 입구 지킴이)
	Scripts.Abaddon = false;  // 어배던
	Scripts.Frozenstein = false;  // 프로즌스타인(프로즌 리버 앤야 지킴이)
		Config.Frozenstein.ClearFrozenRiver = true;  // 프로즌 리버 모든 몹 처치
	Scripts.Bonesaw = false;  // 본소우브리커(그레이셜 트레일 황금상자 지킴이)
		Config.Bonesaw.ClearDrifterCavern = false;  // 드리프터캐번 모든 몹 처치여부
	Scripts.Snapchip = false;  // 스냅치프 쉐터(아이시 셀라 황금상자 지킴이)
		Config.Snapchip.ClearIcyCellar = true;  // 아이시 셀라 모든 몹 처치
	Scripts.Worldstone = false;  // 월드스톤
	Scripts.Baal = false;  // 바알
//		Config.Baal.HotTPMessage = ["쓰론 오브 디스트럭션에 타운포탈을 엽니다. (위험함)"]; // 쓰론오브디스트럭션 1차 포탈 열때 경고문 입력
//		Config.Baal.SafeTPMessage = ["쓰론 오브 디스트럭션 입장! (안전함)"]; // 안전한 상태에서 2차 포탈 열때의 안내문 입력
//		Config.Baal.BaalMessage = ["바알 잡고 다음방 갑니다."]; // 5번의 소환몹 처치후 월드스톤체임버 입장시 안내문 입력
		Config.Baal.SoulQuit = true; // End script if Souls (Burning Souls) are found. 버닝 소울 발견시 스크립트종료
		Config.Baal.DollQuit = true; // End script if Dolls (Undead Soul Killers) are found. 돌(언데드소울킬러)발견시 스크립트 종료
		Config.Baal.KillBaal = true; // Kill Baal. Leaves game after wave 5 if false. ‘false’ 로 설정시 5번의 소환몹 처치만 하고 게임 종료

	// *** 헬퍼 스크립트 ***
	Scripts.TristramLeech = false; // Enters Tristram, attempts to stay close to the leader and will try and help kill.
	Scripts.TravincalLeech = false; // Enters portal at back of Travincal.
		Config.TravincalLeech.Helper = true; // If set to true the character will teleport to the stairs and help attack.
	Scripts.Wakka = false; // Walking chaos leecher with auto leader assignment, stays at safe distance from the leader
		Config.Wakka.Wait = 1; // Minutes to wait for leader
	Scripts.SealLeecher = false; // Enter safe portals to Chaos. Leader should run SealLeader.
	Scripts.DiabloHelper = false; // Chaos helper, kills monsters and doesn't open seals on its own.
		Config.DiabloHelper.Wait = 120; // Seconds to wait for a runner to be in Chaos. If Config.Leader is set, it will wait only for the leader.
		Config.DiabloHelper.Entrance = true; // Start from entrance. Set to false to start from star.
		Config.DiabloHelper.SkipTP = false; // Don't wait for town portal and directly head to chaos. It will clear monsters around chaos entrance and wait for the runner.
		Config.DiabloHelper.SkipIfBaal = false; // End script if there are party members in a Baal run.
		Config.DiabloHelper.OpenSeals = false; // Open seals as the helper
		Config.DiabloHelper.SafePrecast = true; // take random WP to safely precast
		Config.DiabloHelper.SealOrder = ["vizier", "seis", "infector"]; // the order in which to clear the seals. If seals are excluded, they won't be checked unless diablo fails to appear
		Config.DiabloHelper.RecheckSeals = false; // Teleport to each seal and double-check that it was opened and boss was killed if Diablo doesn't appear
	Scripts.AutoBaal = false; // Baal leecher with auto leader assignment
		Config.AutoBaal.FindShrine = false; // false = disabled, 1 = search after hot tp message, 2 = search as soon as leader is found
		Config.AutoBaal.LeechSpot = [15115, 5050]; // X, Y coords of Throne Room leech spot
		Config.AutoBaal.LongRangeSupport = false; // Cast long distance skills from a safe spot
	Scripts.BaalHelper = false;
		Config.BaalHelper.Wait = 120; // Seconds to wait for a runner to be in Throne
		Config.BaalHelper.KillNihlathak = false; // Kill Nihlathak before going to Throne
		Config.BaalHelper.FastChaos = false; // Kill Diablo before going to Throne
		Config.BaalHelper.DollQuit = false; // End script if Dolls (Undead Soul Killers) are found.
		Config.BaalHelper.KillBaal = true; // Kill Baal. If set to false, you must configure Config.QuitList or the bot will wait indefinitely.
		Config.BaalHelper.SkipTP = false; // Don't wait for a TP, go to WSK3 and wait for someone to go to throne. Anti PK measure.
	Scripts.Follower = false; // Script that follows a manually played leader around like a merc. For a list of commands, see Follower.js

	// *** special scripts ***
	Scripts.WPGetter = false; // Get missing waypoints
	Scripts.GetKeys = false; // Hunt for T/H/D keys
	Scripts.OrgTorch = false;
		Config.OrgTorch.MakeTorch = true; // Convert organ sets to torches
		Config.OrgTorch.WaitForKeys = true; // Enable Torch System to get keys from other profiles. See libs/TorchSystem.js for more info
		Config.OrgTorch.WaitTimeout = 15; // Time in minutes to wait for keys before moving on
		Config.OrgTorch.UseSalvation = true; // Use Salvation aura on Mephisto (if possible)
		Config.OrgTorch.GetFade = false; // Get fade by standing in a fire. You MUST have Last Wish or Treachery on your character being worn.
		Config.OrgTorch.AntidotesToChug = 0; // Chug x antidotes before Lilith. Each antidote gives +50 poison res and +10 max poison for 30 seconds. The duration stacks. 4 potions == 2 minutes
	Scripts.Rusher = false; // Rush bot. For a list of commands, see Rusher.js
		Config.Rusher.WaitPlayerCount = 0; // Wait until game has a certain number of players (0 - don't wait, 8 - wait for full game).
		Config.Rusher.Radament = false; // Do Radament quest.
		Config.Rusher.LamEsen = false; // Do Lam Esen quest.
		Config.Rusher.Izual = false; // Do Izual quest.
		Config.Rusher.Shenk = false; // Do Shenk quest.
		Config.Rusher.Anya = false; // Do Anya quest.
		Config.Rusher.LastRun = ""; // End rush after this run.
	Scripts.Rushee = false; // Automatic rushee, works with Rusher. Set Rusher's character name as Config.Leader
		Config.Rushee.Quester = false; // Enter portals and get quest items.
		Config.Rushee.Bumper = false; // Do Ancients and Baal. Minimum levels: 20 - norm, 40 - nightmare
	Scripts.CrushTele = false; // classic rush teleporter. go to area of interest and press "-" numpad key
	Scripts.Questing = false; // solves missing quests (skill/stat+shenk)
	Scripts.Gamble = false; // Gambling system, other characters will mule gold into your game so you can gamble infinitely. See Gambling.js
	Scripts.Crafting = false; // Crafting system, other characters will mule crafting ingredients. See CraftingSystem.js
	Scripts.GhostBusters = false; // Kill ghosts in most areas that contain them
	Scripts.Enchant = false;
		Config.Enchant.Triggers = ["chant", "cows", "wps"]; // Chat commands for enchant, cow level and waypoint giving
		Config.Enchant.GetLeg = false; // Get Wirt's Leg from Tristram. If set to false, it will check for the leg in town.
		Config.Enchant.AutoChant = false; // Automatically enchant nearby players and their minions
		Config.Enchant.GameLength = 20; // Game length in minutes
	Scripts.IPHunter = false;
		Config.IPHunter.IPList = []; // List of IPs to look for. example: [165, 201, 64]
		Config.IPHunter.GameLength = 3; // Number of minutes to stay in game if ip wasn't found
	Scripts.KillDclone = false; // Kill Diablo Clone by using Arcane Sanctuary waypoint. Diablo needs to walk the Earth in the game.
	Scripts.ShopBot = false; // Shopbot script. Automatically uses shopbot.nip and ignores other pickits.
		// Supported NPCs: Akara, Charsi, Gheed, Elzix, Fara, Drognan, Ormus, Asheara, Hratli, Jamella, Halbu, Anya. Multiple NPCs are also supported, example: [NPC.Elzix, NPC.Fara]
		// Use common sense when combining NPCs. Shopping in different acts will probably lead to bugs.
		Config.ShopBot.ShopNPC = NPC.Anya;
		// Put item classid numbers or names to scan (remember to put quotes around names). Leave blank to scan ALL items. See libs/config/templates/ShopBot.txt
		Config.ShopBot.ScanIDs = [];
		Config.ShopBot.CycleDelay = 0; // Delay between shopping cycles in milliseconds, might help with crashes.
		Config.ShopBot.QuitOnMatch = false; // Leave game as soon as an item is shopped.
	Scripts.ChestMania = false; // Open chests in configured areas. See sdk/areas.txt
		Config.ChestMania.Act1 = [13, 14, 15, 16, 18, 19]; // List of act 1 areas to open chests in
		Config.ChestMania.Act2 = [55, 59, 65, 66, 67, 68, 69, 70, 71, 72]; // List of act 2 areas to open chests in
		Config.ChestMania.Act3 = [79, 80, 81, 92, 93, 84, 85, 90]; // List of act 3 areas to open chests in
		Config.ChestMania.Act4 = [107]; // List of act 4 areas to open chests in
		Config.ChestMania.Act5 = [115, 116, 119, 125, 126, 127]; // List of act 5 areas to open chests in
	Scripts.ClearAnyArea = false; // Clear any area. Uses Config.ClearType to determine which type of monsters to kill.
		Config.ClearAnyArea.AreaList = []; // List of area ids to clear. See sdk/areas.txt

	// *** Guest scripts ***

	// Baal Assistant by YourGreatestMember
	Scripts.BaalAssistant = false; // Used to leech or help in baal runs.
		Config.BaalAssistant.Wait = 120; // Seconds to wait for a runner to be in the throne / portal wait / safe TP wait / hot TP wait...
		Config.BaalAssistant.KillNihlathak = false; // Kill Nihlathak before going to Throne
		Config.BaalAssistant.FastChaos = false; // Kill Diablo before going to Throne
		Config.BaalAssistant.Helper = true; // Set to true to help attack, set false to to leech.
		Config.BaalAssistant.GetShrine = false; // Set to true to get a experience shrine at the start of the run.
		Config.BaalAssistant.GetShrineWaitForHotTP = false; // Set to true to get a experience shrine after leader shouts the hot tp message as defined in Config.BaalAssistant.HotTPMessage
		Config.BaalAssistant.SkipTP = false; // Set to true to enable the helper to skip the TP and teleport down to the throne room.
		Config.BaalAssistant.WaitForSafeTP = false; // Set to true to wait for a safe TP message (defined in SafeTPMessage)
		Config.BaalAssistant.DollQuit = false; // Quit on dolls. (Hardcore players?)
		Config.BaalAssistant.SoulQuit = false; // Quit on Souls. (Hardcore players?)
		Config.BaalAssistant.KillBaal = true; // Set to true to kill baal, if you set to false you MUST configure Config.QuitList or Config.BaalAssistant.NextGameMessage or the bot will wait indefinitely.
		Config.BaalAssistant.HotTPMessage = ["Hot"]; // Configure safe TP messages.
		Config.BaalAssistant.SafeTPMessage = ["Safe", "Clear"]; // Configure safe TP messages.
		Config.BaalAssistant.BaalMessage = ["Baal"]; // Configure baal messages, this is a precautionary measure.
		Config.BaalAssistant.NextGameMessage = ["Next Game", "Next", "New Game"];	// Next Game message, this is a precautionary quit command, Reccomended setting up: Config.QuitList

	// Town settings
	Config.HealHP = 90; // Go to a healer if under designated percent of life.
	Config.HealMP = 50; // Go to a healer if under designated percent of mana.
	Config.HealStatus = true; // Go to a healer if poisoned or cursed
	Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
	Config.MercWatch = true; // Instant merc revive during battle.

	// Potion settings
	Config.UseHP = 85; // Drink a healing potion if life is under designated percent.
	Config.UseRejuvHP = 75; // Drink a rejuvenation potion if life is under designated percent.
	Config.UseMP = 30; // Drink a mana potion if mana is under designated percent.
	Config.UseRejuvMP = 0; // Drink a rejuvenation potion if mana is under designated percent.
	Config.UseMercHP = 75; // Give a healing potion to your merc if his/her life is under designated percent.
	Config.UseMercRejuv = 15; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
	Config.HPBuffer = 0; // Number of healing potions to keep in inventory.
	Config.MPBuffer = 0; // Number of mana potions to keep in inventory.
	Config.RejuvBuffer = 0; // Number of rejuvenation potions to keep in inventory.

	// Chicken settings
	Config.LifeChicken = 60; // Exit game if life is less or equal to designated percent.
	Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
	Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
	Config.TownHP = 65; // Go to town if life is under designated percent.
	Config.TownMP = 0; // Go to town if mana is under designated percent.

	/* Inventory lock configuration. !!!READ CAREFULLY!!!
	 * 0 = item is locked and won't be moved. If item occupies more than one slot, ALL of those slots must be set to 0 to lock it in place.
	 * Put 0s where your torch, annihilus and everything else you want to KEEP is.
	 * 1 = item is unlocked and will be dropped, stashed or sold.
	 * If you don't change the default values, the bot won't stash items.
	 */
	Config.Inventory[0] = [0,0,0,0,0,0,0,0,0,0];
	Config.Inventory[1] = [0,0,0,0,0,0,0,0,0,0];
	Config.Inventory[2] = [0,0,0,0,0,0,0,0,0,0];
	Config.Inventory[3] = [0,0,0,0,0,0,0,0,0,0];

	Config.StashGold = 500000; // Minimum amount of gold to stash.

	/* Potion types for belt columns from left to right.
	 * Rejuvenation potions must always be rightmost.
	 * Supported potions - Healing ("hp"), Mana ("mp") and Rejuvenation ("rv")
	 */
	Config.BeltColumn[0] = "hp";
	Config.BeltColumn[1] = "mp";
	Config.BeltColumn[2] = "mp";
	Config.BeltColumn[3] = "rv";

	/* Minimum amount of potions. If we have less, go to vendor to purchase more.
	 * Set rejuvenation columns to 0, because they can't be bought.
	 */
	Config.MinColumn[0] = 4;
	Config.MinColumn[1] = 4;
	Config.MinColumn[2] = 4;
	Config.MinColumn[3] = 0;

	// Pickit config. Default folder is kolbot/pickit.
	Config.PickitFiles.push("h/1)normals.nip");
	Config.PickitFiles.push("h/1)sets.nip");
	Config.PickitFiles.push("h/2)arms.nip");
	Config.PickitFiles.push("h/2)uniques.nip");
	Config.PickitFiles.push("h/3)armors.nip");
	//Config.PickitFiles.push("h/3)runewords.nip");   //수정필요
	Config.PickitFiles.push("h/4)charms.nip");
	Config.PickitFiles.push("h/4_1)cir^amu)ama.nip");
	Config.PickitFiles.push("h/4_2)cir^amu)ass.nip");
	Config.PickitFiles.push("h/4_3)cir^amu)nec.nip");
	Config.PickitFiles.push("h/4_4)cir^amu)bar.nip");
	Config.PickitFiles.push("h/4_4)cir^amu)pal.nip");
	Config.PickitFiles.push("h/4_6)cir^amu)sor.nip");
	Config.PickitFiles.push("h/4_7)cir^amu)dru.nip");
	Config.PickitFiles.push("h/4_8)cir^amu)etc.nip");
	Config.PickitFiles.push("h/5)rings.nip");
	Config.PickitFiles.push("h/6)jewels.nip");
	Config.PickitFiles.push("h/7_1)jordan.nip");
	Config.PickitFiles.push("h/7_2)runes.nip");
	Config.PickitFiles.push("h/7_3)gems.nip");
	Config.PickitFiles.push("h/8)keys.nip");
	Config.PickitFiles.push("h/9)potions.nip");
	//Config.PickitFiles.push("h/MyCubing.nip");            //큐빙옵션
	Config.PickitFiles.push("h/orbs.nip");
	
	// Pickit config. Default folder is kolbot/pickit.
	Config.PickitFiles.push("kolton.nip");
	//Config.PickitFiles.push("LLD.nip");

	//-----usual-------- 
	Config.PickitFiles.push("auto/Charms.nip");
	//Config.PickitFiles.push("auto/Magic.nip");
	//Config.PickitFiles.push("auto/Rare.nip");
	//Config.PickitFiles.push("auto/Runes.nip");	//주울룬부터 주움
	//Config.PickitFiles.push("auto/Runeword.nip");
	//Config.PickitFiles.push("auto/Set.nip");
	Config.PickitFiles.push("auto/Unique.nip");	
	Config.PickitFiles.push("auto/sell.nip");
	//Config.PickitFiles.push("auto/White.nip");
	//Config.PickitFiles.push("auto/White1.nip");	//왕초보용 에테리얼(랜덤)소켓
	//Config.PickitFiles.push("auto/White2.nip");	//저렙용 에테리얼(랜덤)소켓
	//Config.PickitFiles.push("auto/merc.nip");  //레지 용병템
	//
	
	Config.PickitFiles.push("my/my.nip");
	
	Config.PickRange = 80; // Pick radius
	Config.FastPick = false; // Check and pick items between attacks
	Config.ManualPlayPick = false; // If set to true and D2BotMap entry script is used, will enable picking in manual play.

	/* Advanced automule settings
	 * Trigger - Having an item that is on the list will initiate muling. Useful if you want to mule something immediately upon finding.
	 * Force - Items listed here will be muled even if they are ingredients for cubing.
	 * Exclude - Items listed here will be ignored and will not be muled. Items on Trigger or Force lists are prioritized over this list.
	 *
	 * List can either be set as string in pickit format and/or as number referring to item classids. Each entries are separated by commas.
	 * Example :
	 *  Config.AutoMule.Trigger = [639, 640, "[type] == ring && [quality] == unique # [maxmana] == 20"];
	 *  	This will initiate muling when your character finds Ber, Jah, or SOJ.
	 *  Config.AutoMule.Force = [561, 566, 571, 576, 581, 586, 601];
	 *  	This will mule perfect gems/skull during muling.
	 *  Config.AutoMule.Exclude = ["[name] >= talrune && [name] <= solrune", "[name] >= 654 && [name] <= 657"];
	 *  	This will exclude muling of runes from tal through sol, and any essences.
	 */
	Config.AutoMule.Trigger = [];
	Config.AutoMule.Force = [];
	Config.AutoMule.Exclude = [];

	// Additional item info log settings. All info goes to \logs\ItemLog.txt
	Config.ItemInfo = false; // Log stashed, skipped (due to no space) or sold items.
	Config.ItemInfoQuality = []; // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];

	// Item identification settings
	Config.CainID.Enable = false; // Identify items at Cain
	Config.CainID.MinGold = 2500000; // Minimum gold (stash + character) to have in order to use Cain.
	Config.CainID.MinUnids = 3; // Minimum number of unid items in order to use Cain.
	Config.FieldID = false; // Identify items in the field instead of going to town.
	Config.DroppedItemsAnnounce.Enable = false;	// Announce Dropped Items to in-game newbs
	Config.DroppedItemsAnnounce.Quality = []; // Quality of item to announce. See NTItemAlias.dbl for values. Example: Config.DroppedItemsAnnounce.Quality = [6, 7, 8];

	// Manager Item Log Screen
	Config.LogKeys = true; // Log keys on item viewer
	Config.LogOrgans = true; // Log organs on item viewer
	Config.LogLowRunes = true; // Log low runes (El - Dol) on item viewer
	Config.LogMiddleRunes = true; // Log middle runes (Hel - Mal) on item viewer
	Config.LogHighRunes = true; // Log high runes (Ist - Zod) on item viewer
	Config.LogLowGems = true; // Log low gems (chipped, flawed, normal) on item viewer
	Config.LogHighGems = true; // Log high gems (flawless, perfect) on item viewer
	Config.SkipLogging = []; // Custom log skip list. Set as three digit item code or classid. Example: ["tes", "ceh", 656, 657] will ignore logging of essences.
	Config.ShowCubingInfo = true; // Show cubing messages on console

	// Repair settings
	Config.CubeRepair = false; // Repair weapons with Ort and armor with Ral rune. Don't use it if you don't understand the risk of losing items.
	Config.RepairPercent = 70; // Durability percent of any equipped item that will trigger repairs.

	// Gambling config
	Config.Gamble = true;
	Config.GambleGoldStart = 2500000;
	Config.GambleGoldStop = 500000;

	// List of item names or classids for gambling. Check libs/NTItemAlias.dbl file for other item classids.
	Config.GambleItems.push("Amulet");
	Config.GambleItems.push("Ring");
	Config.GambleItems.push("Circlet");
	Config.GambleItems.push("Coronet");

	/* Cubing config. All recipe names are available in Templates/Cubing.txt. For item names/classids check NTItemAlias.dbl
	 * The format is Config.Recipes.push([recipe_name, item_name_or_classid, etherealness]). Etherealness is optional and only applies to some recipes.
	 */
	Config.Cubing = false; // Set to true to enable cubing.

	// Ingredients for the following recipes will be auto-picked, for classids check libs/NTItemAlias.dbl

	//Config.Recipes.push([Recipe.Gem, "Chipped Amethyst"]); // make FlawedAmethyst
	//Config.Recipes.push([Recipe.Gem, "Chipped Topaz"]); // make Flawed Topaz
	//Config.Recipes.push([Recipe.Gem, "Chipped Sapphire"]); // make Flawed Sapphire
	//Config.Recipes.push([Recipe.Gem, "Chipped Emerald"]); // make Flawed Emerald
	//Config.Recipes.push([Recipe.Gem, "Chipped Ruby"]); // make Flawed Ruby
	//Config.Recipes.push([Recipe.Gem, "Chipped Diamond"]); // make Flawed Diamond
	//Config.Recipes.push([Recipe.Gem, "Chipped Skull"]); // make Flawed Skull

	//Config.Recipes.push([Recipe.Gem, "Flawed Amethyst"]); // make Amethyst
	//Config.Recipes.push([Recipe.Gem, "Flawed Topaz"]); // make Topaz
	//Config.Recipes.push([Recipe.Gem, "Flawed Sapphire"]); // make Sapphire
	//Config.Recipes.push([Recipe.Gem, "Flawed Emerald"]); // make Emerald
	//Config.Recipes.push([Recipe.Gem, "Flawed Ruby"]); // make Ruby
	//Config.Recipes.push([Recipe.Gem, "Flawed Diamond"]); // make Diamond
	//Config.Recipes.push([Recipe.Gem, "Flawed Skull"]); // make Skull

	Config.Recipes.push([Recipe.Gem, "Amethyst"]); // make Flawless Amethyst
	Config.Recipes.push([Recipe.Gem, "Topaz"]); // make Flawless Topaz
	Config.Recipes.push([Recipe.Gem, "Sapphire"]); // make Flawless Sapphire
	Config.Recipes.push([Recipe.Gem, "Emerald"]); // make Flawless Emerald
	Config.Recipes.push([Recipe.Gem, "Ruby"]); // make Flawless Ruby
	Config.Recipes.push([Recipe.Gem, "Diamond"]); // make Flawless Diamond
	Config.Recipes.push([Recipe.Gem, "Skull"]); // make Flawless Skull

	Config.Recipes.push([Recipe.Gem, "Flawless Amethyst"]); // make Perfect Amethyst
	Config.Recipes.push([Recipe.Gem, "Flawless Topaz"]); // make Perfect Topaz
	Config.Recipes.push([Recipe.Gem, "Flawless Sapphire"]); // make Perfect Sapphire
	Config.Recipes.push([Recipe.Gem, "Flawless Emerald"]); // make Perfect Emerald
	Config.Recipes.push([Recipe.Gem, "Flawless Ruby"]); // make Perfect Ruby
	Config.Recipes.push([Recipe.Gem, "Flawless Diamond"]); // make Perfect Diamond
	Config.Recipes.push([Recipe.Gem, "Flawless Skull"]); // make Perfect Skull

	//Config.Recipes.push([Recipe.Token]); // Make Token of Absolution

	// Ingredients for the following recipes will be auto-picked, for classids check libs/NTItemAlias.dbl

	//Config.Recipes.push([Recipe.Rune, "El Rune"]); // Upgrade El to Eld
	//Config.Recipes.push([Recipe.Rune, "Eld Rune"]); // Upgrade Eld to Tir
	//Config.Recipes.push([Recipe.Rune, "Tir Rune"]); // Upgrade Tir to Nef
	//Config.Recipes.push([Recipe.Rune, "Nef Rune"]); // Upgrade Nef to Eth
	//Config.Recipes.push([Recipe.Rune, "Eth Rune"]); // Upgrade Eth to Ith
	//Config.Recipes.push([Recipe.Rune, "Ith Rune"]); // Upgrade Ith to Tal
	//Config.Recipes.push([Recipe.Rune, "Tal Rune"]); // Upgrade Tal to Ral
	//Config.Recipes.push([Recipe.Rune, "Ral Rune"]); // Upgrade Ral to Ort
	//Config.Recipes.push([Recipe.Rune, "Ort Rune"]); // Upgrade Ort to Thul

	//Config.Recipes.push([Recipe.Rune, "Thul Rune"]); // Upgrade Thul to Amn
	//Config.Recipes.push([Recipe.Rune, "Amn Rune"]); // Upgrade Amn to Sol
	//Config.Recipes.push([Recipe.Rune, "Sol Rune"]); // Upgrade Sol to Shael
	//Config.Recipes.push([Recipe.Rune, "Shael Rune"]); // Upgrade Shael to Dol
	//Config.Recipes.push([Recipe.Rune, "Dol Rune"]); // Upgrade Dol to Hel
	//Config.Recipes.push([Recipe.Rune, "Hel Rune"]); // Upgrade Hel to Io
	//Config.Recipes.push([Recipe.Rune, "Io Rune"]); // Upgrade Io to Lum
	//Config.Recipes.push([Recipe.Rune, "Lum Rune"]); // Upgrade Lum to Ko
	//Config.Recipes.push([Recipe.Rune, "Ko Rune"]); // Upgrade Ko to Fal
	//Config.Recipes.push([Recipe.Rune, "Fal Rune"]); // Upgrade Fal to Lem
	//Config.Recipes.push([Recipe.Rune, "Lem Rune"]); // Upgrade Lem to Pul

//	Config.Recipes.push([Recipe.Rune, "Pul Rune"]); // Upgrade Pul to Um
	//Config.Recipes.push([Recipe.Rune, "Um Rune"]); // Upgrade Um to Mal
//	Config.Recipes.push([Recipe.Rune, "Mal Rune"]); // Upgrade Mal to Ist
	//Config.Recipes.push([Recipe.Rune, "Ist Rune"]); // Upgrade Ist to Gul
//	Config.Recipes.push([Recipe.Rune, "Gul Rune"]); // Upgrade Gul to Vex

	// Ingredients for the following recipes will be auto-picked, for classids check libs/NTItemAlias.dbl

	//Config.Recipes.push([Recipe.Blood.Helm, "Armet"]); // Craft Blood Helm
	//Config.Recipes.push([Recipe.Blood.Boots, "Mirrored Boots"]); // Craft Blood Boots
	//Config.Recipes.push([Recipe.Blood.Gloves, "Vampirebone Gloves"]); // Craft Blood Gloves
	//Config.Recipes.push([Recipe.Blood.Belt, "Mithril Coil"]); // Craft Blood Belt
	//Config.Recipes.push([Recipe.Blood.Shield, "Blade Barrier"]); // Craft Blood Shield
	//Config.Recipes.push([Recipe.Blood.Body, "Hellforge Plate"]); // Craft Blood Armor
	//Config.Recipes.push([Recipe.Blood.Amulet]); // Craft Blood Amulet
	//Config.Recipes.push([Recipe.Blood.Ring]); // Craft Blood Ring
	//Config.Recipes.push([Recipe.Blood.Weapon, "Berserker Axe"]); // Craft Blood Weapon

	//Config.Recipes.push([Recipe.Caster.Helm, "Demonhead Mask"]); // Craft Caster Helm
	//Config.Recipes.push([Recipe.Caster.Boots, "Wyrmhide Boots"]); // Craft Caster Boots
	//Config.Recipes.push([Recipe.Caster.Gloves, "Bramble Mitts"]); // Craft Caster Gloves
	//Config.Recipes.push([Recipe.Caster.Belt, "Vampirefang Belt"]); // Craft Caster Belt
	//Config.Recipes.push([Recipe.Caster.Shield, "Luna"]); // Craft Caster Shield
	//Config.Recipes.push([Recipe.Caster.Body, "Archon Plate"]); // Craft Caster Armor
	//Config.Recipes.push([Recipe.Caster.Amulet]); // Craft Caster Amulet
	//Config.Recipes.push([Recipe.Caster.Ring]); // Craft Caster Ring
	//Config.Recipes.push([Recipe.Caster.Weapon, "Seraph Rod"]); // Craft Caster  Weapon

	//Config.Recipes.push([Recipe.HitPower.Helm, "Giant Conch"]); // Craft Hit Power Helm
	//Config.Recipes.push([Recipe.HitPower.Boots, "Boneweave Boots"]); // Craft Hit Power Boots
	//Config.Recipes.push([Recipe.HitPower.Gloves, "Vambraces"]); // Craft Hit Power Gloves
	//Config.Recipes.push([Recipe.HitPower.Belt, "Troll Belt"]); // Craft Hit Power Belt
	//Config.Recipes.push([Recipe.HitPower.Shield, "Ward"]); // Craft Hit Power Shield
	//Config.Recipes.push([Recipe.HitPower.Body, "Kraken Shell"]); // Craft Hit Power Armor
	//Config.Recipes.push([Recipe.HitPower.Amulet]); // Craft Hit Power Amulet
	//Config.Recipes.push([Recipe.HitPower.Ring]); // Craft Hit Power Ring
	//Config.Recipes.push([Recipe.HitPower.Weapon, "Scourge"]); // Craft Hit Power Weapon | "Blunt" = All maces, rods (+50% Undead), excepting orbs

	//Config.Recipes.push([Recipe.Safety.Helm, "Corona"]); // Craft Safety Helm
	//Config.Recipes.push([Recipe.Safety.Boots, "Myrmidon Boots"]); // Craft Safety Boots
	//Config.Recipes.push([Recipe.Safety.Gloves, "Ogre Gauntlets"]); // Craft Safety Gloves
	//Config.Recipes.push([Recipe.Safety.Belt, "Spiderweb Sash"]); // Craft Safety Belt
	//Config.Recipes.push([Recipe.Safety.Shield, "Monarch"]); // Craft Safety Shield
	//Config.Recipes.push([Recipe.Safety.Body, "Great Hauberk"]); // Craft Safety Armor
	//Config.Recipes.push([Recipe.Safety.Amulet]); // Craft Safety Amulet
	//Config.Recipes.push([Recipe.Safety.Ring]); // Craft Safety Ring
	//Config.Recipes.push([Recipe.Safety.Weapon, "Matriarchal Javelin"]); // Craft Safety Weapon
	//Config.Recipes.push([Recipe.Safety.Weapon, "Matriarchal Spear"]); // Craft Safety Weapon

	// The gems not used by other recipes will be used for magic item rerolling.

	//Config.Recipes.push([Recipe.Reroll.Magic, "Diadem"]); // Reroll magic Diadem
	//Config.Recipes.push([Recipe.Reroll.Magic, "Grand Charm"]); // Reroll magic Grand Charm (ilvl 91+)

	// the cubing formula: 6 Perfect Skulls + 1 Rare Item = 1 random low quality rare item of the same type
	//Config.Recipes.push([Recipe.Reroll.Rare, "Diadem"]); // Reroll rare Diadem

	// the cubing formula: 1 Perfect Skull + 1 Rare Item + Stone of Jordan = 1 high quality new rare item of the same type
	//Config.Recipes.push([Recipe.Reroll.HighRare, "Diadem"]); // Reroll high rare Diadem

	/* Base item for the following recipes must be in pickit. The rest of the ingredients will be auto-picked.
	 * Use Roll.Eth, Roll.NonEth or Roll.All to determine what kind of base item to roll - ethereal, non-ethereal or all.
	 */
	//Config.Recipes.push([Recipe.Socket.Weapon, "Thresher", Roll.Eth]); // Socket ethereal Thresher
	//Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe", Roll.Eth]); // Socket ethereal Cryptic Axe
	//Config.Recipes.push([Recipe.Socket.Armor, "Sacred Armor", Roll.Eth]); // Socket ethereal Sacred Armor
	//Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate", Roll.Eth]); // Socket ethereal Archon Plate

	//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Heavy Gloves", Roll.NonEth]); // Upgrade Bloodfist to Exceptional
	//Config.Recipes.push([Recipe.Unique.Armor.ToExceptional, "Light Gauntlets", Roll.NonEth]); // Upgrade Magefist to Exceptional
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Sharkskin Gloves", Roll.NonEth]); // Upgrade Bloodfist or Grave Palm to Elite
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "Battle Gauntlets", Roll.NonEth]); // Upgrade Magefist or Lavagout to Elite
	//Config.Recipes.push([Recipe.Unique.Armor.ToElite, "War Boots", Roll.NonEth]); // Upgrade Gore Rider to Elite

	/* Runeword config. All recipes are available in Templates/Runewords.txt
	 * Keep lines follow pickit format and any given runeword is tested vs ALL lines so you don't need to repeat them
	 */
	Config.MakeRunewords = true; // Set to true to enable runeword making/rerolling

//	Config.Runewords.push([Runeword.Insight, "Thresher", Roll.Eth]); // Make ethereal Insight Thresher
//	Config.Runewords.push([Runeword.Insight, "Cryptic Axe", Roll.Eth]); // Make ethereal Insight Cryptic Axe
	//Config.Runewords.push([Runeword.Insight, "Great Poleaxe"]); // Make Insight Great Poleaxe
	//Config.Runewords.push([Runeword.Insight, "Giant Thresher"]); // Make Insight Giant Thresher
	Config.Runewords.push([Runeword.Insight, "Colossus Voulge"]); // Make Insight Colossus Voulge
//	Config.KeepRunewords.push("[type] == polearm # [meditationaura] == 17"); // medium Insight
	//Config.KeepRunewords.push("[type] == polearm # [meditationaura] == 17 && [enhanceddamage] >= 260 && [attackrate] >= 250"); // perfect Insight

//	Config.Runewords.push([Runeword.Grief, "Phase Blade"]); // Make Grief Phase Blade	
	//Config.Runewords.push([Runeword.Grief, "Berserker Axe"]); // Make Grief Berserker Axe	
//	Config.KeepRunewords.push("([type] == sword || [type] == axe) # [plusmaxdamage] >= 390"); // medium Grief
	//Config.KeepRunewords.push("([type] == sword || [type] == axe) # [itemfasterattackrate] >= 40 && [plusmaxdamage] >= 400"); // perfect Grief  and *optional [itempiercepois] >= 25

//	Config.Runewords.push([Runeword.CallToArms, "Crystal Sword"]); // Make CTA Crystal Sword
//	Config.Runewords.push([Runeword.CallToArms, "Phase Blade"]); // Make CTA Phase Blade
	//Config.Runewords.push([Runeword.CallToArms, "Flail"]); // Make CTA Flail
	//Config.KeepRunewords.push("[name] == crystalsword || [name] == phaseblade || [name] == flail # [plusskillbattlecommand] >= 3 && [plusskillbattleorders] >=3");
//	Config.KeepRunewords.push("[name] == crystalsword || [name] == phaseblade || [name] == flail # [plusskillbattlecommand] >= 6 && [plusskillbattleorders] >=6 && [plusskillbattlecry] >= 4"); // perfect CTA and *optional [enhanceddamage] = 290%

//	Config.Runewords.push([Runeword.Spirit, "Crystal Sword"]); // Make Spirit Crystal Sword
//	Config.Runewords.push([Runeword.Spirit, "Broad Sword"]); // Make Spirit Broad Sword
	//Config.Runewords.push([Runeword.Spirit, "Battle Sword"]); // Make Spirit Battle Sword
	//Config.Runewords.push([Runeword.Spirit, "Phase Blade"]); // Make Spirit Phase Blade	
//	Config.Runewords.push([Runeword.Spirit, "Monarch", Roll.NonEth]); // Make Spirit Monarch
//	Config.Runewords.push([Runeword.Spirit, "Sacred Targe", Roll.NonEth]); // Make Spirit Sacred Targe
//	Config.Runewords.push([Runeword.Spirit, "Kurast Shield"]); // Make Spirit Kurast Shield
	//Config.Runewords.push([Runeword.Spirit, "Vortex Shield"]); // Make Spirit Vortex Shield
//	Config.KeepRunewords.push("[type] == sword || [type] == shield || [type] == auricshields # [fcr] == 35"); // middle spirit
	//Config.KeepRunewords.push("[type] == sword || [type] == shield || [type] == auricshields # [fcr] == 35") && [maxmana] >= 112 && [itemabsorbmagic] >=8; // perfect spirit
	//Config.KeepRunewords.push("[type] == shield || [type] == auricshields # [fcr] == 35");
	//Config.Runewords.push([Runeword.Prudence, "Sacred Armor", Roll.Eth]); // Make ethereal Prudence Sacred Armor
	//Config.KeepRunewords.push("[type] == Armor # [enhanceddefense] == 170 && [fireresist] == 35");

	// Public game options

	// If LocalChat is enabled, chat can be sent via 'sendCopyData' instead of BNET
	// To allow 'say' to use BNET, use 'say("msg", true)', the 2nd parameter will force BNET
	// LocalChat messages will only be visible on clients running on the same PC
	Config.LocalChat.Enabled = false; // enable the LocalChat system
	Config.LocalChat.Toggle = false; // optional, set to KEY value to toggle through modes 0, 1, 2
	Config.LocalChat.Mode = 1; // 0 = disabled, 1 = chat from 'say' (recommended), 2 = all chat (for manual play)

	// If Config.Leader is set, the bot will only accept invites from leader. If Config.PublicMode is not 0, Baal and Diablo script will open Town Portals.
	// If set on true, it simply parties.
	Config.PublicMode = 1; // 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable.

	// Party message settings. Each setting represents an array of messages that will be randomly chosen.
	// $name, $level, $class and $killer are replaced by the player's name, level, class and killer
//	Config.Greetings = ["$name (level $level $class)님 어서오세요."]; // Example: ["Hello, $name (level $level $class)"]
//	Config.DeathMessages = ["$name님 $killer를 조심하세요!"]; // Example: ["Watch out for that $killer, $name!"]
//	Config.Congratulations = ["$name님 $level레벨이 되신걸 축하합니다."]; // Example: ["Congrats on level $level, $name!"]
	Config.ShitList = true; // Blacklist hostile players so they don't get invited to party.
	Config.UnpartyShitlisted = true; // Leave party if someone invited a blacklisted player.

	// General config
	Config.AutoMap = false; // Set to true to open automap at the beginning of the game.
	Config.LastMessage = "quit"; // Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
	Config.MinGameTime = 300; // Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
	Config.MaxGameTime = 1500; // Maximum game time in seconds. Quit game when limit is reached.
	Config.TeleSwitch = false; // Switch to secondary (non-primary) slot when teleporting more than 5 nodes.
	Config.OpenChests = true; // Open chests. Controls key buying.
	Config.MiniShopBot = true; // Scan items in NPC shops.
	Config.PacketShopping = false; // Use packets to shop. Improves shopping speed.
	Config.TownCheck = true; // Go to town if out of potions
	Config.LogExperience = true; // Print experience statistics in the manager.
	Config.PingQuit = [{Ping : 250, Duration : 5}, {Ping : 500, Duration : 2}, {Ping : 1000, Duration : 0}]; // Quit if ping is over the given value for over the given time period in seconds.
	Config.Silence = false; // Make the bot not say a word. Do not use in combination with LocalChat

	// Shrine Scanner - scan for shrines while moving.
	// Put the shrine types in order of priority (from highest to lowest). For a list of types, see sdk/shrines.txt
	Config.ScanShrines = [15, 12, 6, 3, 2, 8, 9, 10, 11];

	// MF Switch
	Config.MFSwitchPercent = 0; // Boss life % to switch to non-primary weapon slot. Set to 0 to disable.

	// Primary Slot - Bot will try to determine primary slot if not used (non-cta slot that's not empty)
	Config.PrimarySlot = -1; // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II

	// Fastmod config
	Config.FCR = 0; // 0 - disable, 1 to 255 - set value of faster cast rate
	Config.FHR = 0; // 0 - disable, 1 to 255 - set value of faster hit recovery
	Config.FBR = 0; // 0 - disable, 1 to 255 - set value of faster block recovery
	Config.IAS = 0; // 0 - disable, 1 to 255 - set value of increased attack speed
	Config.PacketCasting = 0; // 0 = disable, 1 = packet teleport, 2 = full packet casting.
	Config.WaypointMenu = true;

	// Anti-hostile config
	Config.AntiHostile = true; // Enable anti-hostile
	Config.HostileAction = 1; // 0 - quit immediately, 1 - quit when hostile player is sighted, 2 - attack hostile
	Config.TownOnHostile = false; // Go to town instead of quitting when HostileAction is 0 or 1
	Config.RandomPrecast = false; // Anti-PK measure, only supported in Baal and BaalHelper and BaalAssisstant at the moment.
	Config.ViperCheck = false; // Quit if revived Tomb Vipers are sighted

	// DClone config
	Config.StopOnDClone = true; // Go to town and idle as soon as Diablo walks the Earth
	Config.SoJWaitTime = 5; // Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
	Config.KillDclone = false; // Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
	Config.DCloneQuit = false; // 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled

	// Monster skip config
	// Skip immune monsters. Possible options: "fire", "cold", "lightning", "poison", "physical", "magic".
	// You can combine multiple resists with "and", for example - "fire and cold", "physical and cold and poison"
	Config.SkipImmune = [];
	// Skip enchanted monsters. Possible options: "extra strong", "extra fast", "cursed", "magic resistant", "fire enchanted", "lightning enchanted", "cold enchanted", "mana burn", "teleportation", "spectral hit", "stone skin", "multiple shots".
	// You can combine multiple enchantments with "and", for example - "cursed and extra fast", "mana burn and extra strong and lightning enchanted"
	Config.SkipEnchant = ["fire enchanted"];
	// Skip monsters with auras. Possible options: "fanaticism", "might", "holy fire", "blessed aim", "holy freeze", "holy shock". Conviction is bugged, don't use it.
	Config.SkipAura = [];
	// Uncomment the following line to always attempt to kill these bosses despite immunities and mods
	Config.SkipException = [getLocaleString(2851), getLocaleString(2852), getLocaleString(2853)]; // vizier, de seis, infector

	/* Attack config
	 * To disable an attack, set it to -1
	 * Skills MUST be POSITIVE numbers. For reference see ...\kolbot\sdk\skills.txt
	 */
	Config.AttackSkill[0] = -1; // Preattack skill.
	Config.AttackSkill[1] = -1; // Primary skill to bosses.
	Config.AttackSkill[2] = -1; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	Config.AttackSkill[3] = -1; // Primary skill to others.
	Config.AttackSkill[4] = -1; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.
	// 소서리스 : 42=스태틱 필드, 43=텔레키네스트, 45=아이스블래스트, 47=파볼, 49=라이트닝, 53=체인라이트닝, 55=글레셜스파이크, 56=메테오, 59=,블리자드, 64=프로즌오브
	
	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Timed low mana skill.
	Config.LowManaSkill[1] = -1; // Untimed low mana skill.

	/* Advanced Attack config. Allows custom skills to be used on custom monsters.
	 *	Format: "Monster Name": [timed skill id, untimed skill id]
	 *	Example: "Baal": [38, -1] to use charged bolt on Baal
	 *	Multiple entries are separated by commas
	 */
	Config.CustomAttack = {
		//"Monster Name": [-1, -1]
	};

	Config.NoTele = false; // Restrict char from teleporting. Useful for low level/low mana chars
	Config.Dodge = true; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
	Config.DodgeRange = 14; // Distance to keep from monsters.
	Config.DodgeHP = 100; // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
	Config.BossPriority = false; // Set to true to attack Unique/SuperUnique monsters first when clearing
	Config.ClearType = 0; // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Config.TeleStomp = false; // Use merc to attack bosses if they're immune to attacks, but not to physical damage

	// Clear while traveling during bot scripts
	// You have two methods to configure clearing. First is simply a spectype to always clear, in any area, with a default range of 30
	// The second method allows you to specify the areas in which to clear while traveling, a range, and a spectype. If area is excluded from this method,
	// all areas will be cleared using the specified range and spectype
	// Config.ClearPath = 0; // Monster spectype to kill while traveling. 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	// Config.ClearPath = {
	// 	Areas: [74], // Specific areas to clear while traveling in. Comment out to clear in all areas
	// 	Range: 30, // Range to clear while traveling
	// 	Spectype: 0, // Monster spectype to kill while traveling. 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	// };

	// Wereform setup. Make sure you read Templates/Attacks.txt for attack skill format.
	Config.Wereform = false; // 0 / false - don't shapeshift, 1 / "Werewolf" - change to werewolf, 2 / "Werebear" - change to werebear

	// 아마존 전용 스킬
	Config.LightningFuryDelay = 10; // Lightning fury interval in seconds. LF is treated as timed skill.
	Config.SummonValkyrie = true; // Summon Valkyrie
	
	// 어쎄신 전용 스킬
	Config.UseTraps = true; // Set to true to use traps
	Config.Traps = [271, 271, 271, 276, 276]; // Skill IDs for traps to be cast on all mosters except act bosses.
	Config.BossTraps = [271, 271, 271, 271, 271]; // Skill IDs for traps to be cast on act bosses.

	Config.SummonShadow = "Master"; // 0 = don't summon, 1 or "Warrior" = summon Shadow Warrior, 2 or "Master" = summon Shadow Master
	Config.UseFade = true; // Set to true to use Fade prebuff.
	Config.UseBoS = false; // Set to true to use Burst of Speed prebuff. TODO: Casting in town + UseFade compatibility
	Config.UseVenom = false; // Set to true to use Venom prebuff. Set to false if you don't have the skill and have Arachnid Mesh - it will cause connection drop otherwise.
	Config.UseCloakofShadows = true; // Set to true to use Cloak of Shadows while fighting. Useful for blinding regular monsters/minions.
	Config.AggressiveCloak = false; // Move into Cloak range or cast if already close

	// 바바리안 전용 스킬
	Config.FindItem = false; // Use Find Item skill on corpses after clearing.
	Config.FindItemSwitch = false; // Switch to non-primary slot when using Find Item skills

	// 드루이드 전용 스킬
	Config.SummonRaven = true;
	Config.SummonAnimal = "0"; // 0 = disabled, 1 or "Spirit Wolf" = summon spirit wolf, 2 or "Dire Wolf" = summon dire wolf, 3 or "Grizzly" = summon grizzly
	Config.SummonSpirit = "Oak Sage"; // 0 = disabled, 1 / "Oak Sage", 2 / "Heart of Wolverine", 3 / "Spirit of Barbs"
	Config.SummonVine = "0"; // 0 = disabled, 1 / "Poison Creeper", 2 / "Carrion Vine", 3 / "Solar Creeper"

	// 네크로멘서 전용 스킬
	Config.Curse[0] = 0; // Boss curse. Use skill number or set to 0 to disable.
	Config.Curse[1] = 0; // Other monsters curse. Use skill number or set to 0 to disable.
	Config.ExplodeCorpses = 0; // Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
	Config.Golem = "None"; // Golem. 0 or "None" = don't summon, 1 or "Clay" = Clay Golem, 2 or "Blood" = Blood Golem, 3 or "Fire" = Fire Golem
	Config.Skeletons = 0; // Number of skeletons to raise. Set to "max" to auto detect, set to 0 to disable.
	Config.SkeletonMages = 0; // Number of skeleton mages to raise. Set to "max" to auto detect, set to 0 to disable.
	Config.Revives = 0; // Number of revives to raise. Set to "max" to auto detect, set to 0 to disable.
	Config.PoisonNovaDelay = 2; // Delay between two Poison Novas in seconds.
	Config.ActiveSummon = false; // Raise dead between each attack. If false, it will raise after clearing a spot.
	Config.ReviveUnstackable = true; // Revive monsters that can move freely after you teleport.
	Config.IronGolemChicken = 30; // Exit game if Iron Golem's life is less or equal to designated percent.

	// 팔라딘 전용 스킬
	Config.AvoidDolls = false; // Try to attack dolls from a greater distance with hammerdins.
	Config.Vigor = true; // Swith to Vigor when running
	Config.Charge = true; // Use Charge when running
	Config.Redemption = [50, 50]; // Switch to Redemption after clearing an area if under designated life or mana. Format: [lifepercent, manapercent]

	// 소서리스 전용 스킬
	Config.CastStatic = 100; // Cast static until the target is at designated life percent. 100 = disabled.
	Config.StaticList = [getLocaleString(2875),"Bloodraven","Griswold","Andariel","The Countess","Diablo","Baal","Mephisto","Duriel","Baals Minion"]; // List of monster NAMES or CLASSIDS to static. Example: Config.StaticList = ["Andariel", 243]; // List of monster NAMES or CLASSIDS to static. Example: Config.StaticList = ["Andariel", 243];

	/* AutoSkill builds character based on array defined by the user and it replaces AutoBuild's skill system.
	 * AutoSkill will automatically spend skill points and it can also allocate any prerequisite skills as required.
	 *
	 * Format: Config.AutoSkill.Build = [[skillID, count, satisfy], [skillID, count, satisfy], ... [skillID, count, satisfy]];
	 *	skill - skill id number (see /sdk/skills.txt)
	 *	count - maximum number of skill points to allocate for that skill
	 *	satisfy - boolean value to stop(true) or continue(false) further allocation until count is met. Defaults to true if not specified.
	 *
	 *	See libs/config/Templates/AutoSkillExampleBuilds.txt for Config.AutoSkill.Build examples.
	 */
	Config.AutoSkill.Enabled = false; // Enable or disable AutoSkill system
	Config.AutoSkill.Save = 0; // Number of skill points that will not be spent and saved
	Config.AutoSkill.Build = [];

	/* AutoStat builds character based on array defined by the user and this will replace AutoBuild's stat system.
	 * AutoStat will stat Build array order. You may want to stat strength or dexterity first to meet item requirements.
	 *
	 * Format: Config.AutoStat.Build = [[statType, stat], [statType, stat], ... [statType, stat]];
	 *	statType - defined as string, or as corresponding stat integer. "strength" or 0, "dexterity" or 2, "vitality" or 3, "energy" or 1
	 *	stat - set to an integer value, and it will spend stat points until it reaches desired *hard stat value (*+stats from items are ignored).
	 *	You can also set stat to string value "all", and it will spend all the remaining points.
	 *	Dexterity can be set to "block" and it will stat dexterity up the the desired block value specified in arguemnt (ignored in classic).
	 *
	 *	See libs/config/Templates/AutoStatExampleBuilds.txt for Config.AutoStat.Build examples.
	 */
	Config.AutoStat.Enabled = false; // Enable or disable AutoStat system
	Config.AutoStat.Save = 0; // Number stat points that will not be spent and saved.
	Config.AutoStat.BlockChance = 0; // An integer value set to desired block chance. This is ignored in classic.
	Config.AutoStat.UseBulk = true; // Set true to spend multiple stat points at once (up to 100), or false to spend singe point at a time.
	Config.AutoStat.Build = [];

	// AutoBuild System ( See /d2bs/kolbot/libs/config/Builds/README.txt for instructions )
	Config.AutoBuild.Enabled = false;			//	This will enable or disable the AutoBuild system

	Config.AutoBuild.Template = "BuildName";	//	The name of the build associated with an existing
												//	template filename located in libs/config/Builds/

	Config.AutoBuild.Verbose = true;			//	Allows script to print messages in console
	Config.AutoBuild.DebugMode = true;			//	Debug mode prints a little more information to console and
												//	logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
												//	It automatically enables Config.AutoBuild.Verbose
}