export class Homework {
  homeworkId: String = ""; // 던전 식별 코드
  homeworkName: String = ""; // 던전 이름
  startLevel: String = "";
  isCommander?: boolean = false; // 군단장 여부
  limitGoldLevel: number = 9999;
  endLevel: number = 9999;
  cycle: number = 0;
  //  dungeonType: String = ""; // 던전 타입
  //  initCycle?: Number = 7; // 초기화 주기 day = 1, week = 7
  //  isCompleted?: boolean = false;
  //  minLevel?: number = 0; // 입장 레벨
  //  maxLevel?: number = 0; // 보상 제한 레벨
  //  executeCount?: number = 0; // 일일 실행 가능 회수

  //   `homework_id` VARCHAR(30) NOT NULL,
  // `homework_name` VARCHAR(30) NOT NULL,
  // `start_level` INT NULL,
  // `is_commander` TINYINT(1) NOT NULL COMMENT 'is it commander dungeon ?',
  // `limit_gold_level` INT NULL,
  // `end_level` INT NULL,
  // `cycle` INT NOT NULL COMMENT 'daily, weekly',
}

export class CharacterData {
  characterId: String = ""; // 캐릭터 아이디
  key: String = ""; //캐릭터 구분 키
  characterLvl: number = 0; //캐릭터 레벨
  guild: String = ""; //길드 명
  dungeon: Array<Object> = []; // 던전 현황
}
