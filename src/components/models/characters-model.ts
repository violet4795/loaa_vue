export class Dungeon {
  dungeonCode: String = ""; // 던전 식별 코드
  dungeonName: String = ""; // 던전 이름
  dungeonType: String = ""; // 던전 타입
  isCommander?: boolean = false; // 군단장 여부
  initCycle?: Number = 7; // 초기화 주기 day = 1, week = 7
  isCompleted?: boolean = false;
  minLevel?: number = 0; // 입장 레벨
  maxLevel?: number = 0; // 보상 제한 레벨
  executeCount?: number = 0; // 일일 실행 가능 회수
}

export class CharacterData {
  characterId: String = ""; // 캐릭터 아이디
  key: String = ""; //캐릭터 구분 키
  characterLvl: number = 0; //캐릭터 레벨
  guild: String = ""; //길드 명
  dungeon: Array<Object> = []; // 던전 현황
}
