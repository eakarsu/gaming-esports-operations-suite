export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-ai-results",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id           String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId       String?"
      },
      {
        "name": "user",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user         User?    @relation(fields: [userId], references: [id])"
      },
      {
        "name": "campaignId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId   String?"
      },
      {
        "name": "campaign",
        "type": "Campaign?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign     Campaign? @relation(fields: [campaignId], references: [id])"
      },
      {
        "name": "sessionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId    String?"
      },
      {
        "name": "session",
        "type": "GameSession?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session      GameSession? @relation(fields: [sessionId], references: [id])"
      },
      {
        "name": "encounterId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "encounterId  String?"
      },
      {
        "name": "encounter",
        "type": "Encounter?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "encounter    Encounter? @relation(fields: [encounterId], references: [id])"
      },
      {
        "name": "combatId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combatId     String?"
      },
      {
        "name": "combat",
        "type": "Combat?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combat       Combat?   @relation(fields: [combatId], references: [id])"
      },
      {
        "name": "npcId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "npcId        String?"
      },
      {
        "name": "npc",
        "type": "Npc?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "npc          Npc?      @relation(fields: [npcId], references: [id])"
      },
      {
        "name": "characterId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "characterId  String?"
      },
      {
        "name": "character",
        "type": "Character?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "character    Character? @relation(fields: [characterId], references: [id])"
      },
      {
        "name": "narrativeId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "narrativeId  String?"
      },
      {
        "name": "narrative",
        "type": "Narrative?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "narrative    Narrative? @relation(fields: [narrativeId], references: [id])"
      },
      {
        "name": "feature",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature      String   // encounter-gen, npc-gen, narrative, combat-advice, lore-gen, character-backstory, session-summary, rule-lookup"
      },
      {
        "name": "prompt",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt       String"
      },
      {
        "name": "rawResponse",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rawResponse  String"
      },
      {
        "name": "parsedResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsedResult Json?"
      },
      {
        "name": "model",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"claude-3-5-sonnet-20241022\"",
        "sourceLine": "model        String   @default(\"claude-3-5-sonnet-20241022\")"
      },
      {
        "name": "tokensUsed",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokensUsed   Int?"
      },
      {
        "name": "durationMs",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "durationMs   Int?"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-board-game-ai-results",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "board_game_ai_results",
    "displayName": "Board Game Ai Results",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "gameId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gameId      String?"
      },
      {
        "name": "game",
        "type": "BoardGame?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game        BoardGame? @relation(fields: [gameId], references: [id])"
      },
      {
        "name": "sessionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId   String?"
      },
      {
        "name": "session",
        "type": "BoardGameSession?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session     BoardGameSession? @relation(fields: [sessionId], references: [id])"
      },
      {
        "name": "feature",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature     String   // rules-lookup, strategy-advice, scenario-gen, variant-rules"
      },
      {
        "name": "prompt",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt      String"
      },
      {
        "name": "rawResponse",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rawResponse String"
      },
      {
        "name": "parsedResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsedResult Json?"
      },
      {
        "name": "model",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"claude-3-5-sonnet-20241022\"",
        "sourceLine": "model       String   @default(\"claude-3-5-sonnet-20241022\")"
      },
      {
        "name": "tokensUsed",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokensUsed  Int?"
      },
      {
        "name": "durationMs",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "durationMs  Int?"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-board-game-sessions",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "board_game_sessions",
    "displayName": "Board Game Sessions",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "gameId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gameId      String"
      },
      {
        "name": "game",
        "type": "BoardGame",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game        BoardGame @relation(fields: [gameId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "players",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "players     Json     @default(\"[]\") // player names and scores"
      },
      {
        "name": "winnerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "winnerId    String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes       String?"
      },
      {
        "name": "playedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "playedAt    DateTime @default(now())"
      },
      {
        "name": "durationMin",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "durationMin Int?"
      },
      {
        "name": "aiResults",
        "type": "BoardGameAiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults   BoardGameAiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-board-games",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "board_games",
    "displayName": "Board Games",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "minPlayers",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "2",
        "sourceLine": "minPlayers  Int      @default(2)"
      },
      {
        "name": "maxPlayers",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "4",
        "sourceLine": "maxPlayers  Int      @default(4)"
      },
      {
        "name": "complexity",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"medium\"",
        "sourceLine": "complexity  String   @default(\"medium\") // light, medium, heavy"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String?  // strategy, cooperative, deck-building, etc."
      },
      {
        "name": "bggId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bggId       String?  // Board Game Geek ID"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl    String?"
      },
      {
        "name": "rules",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rules       String?  // rules reference text"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "tags        String[] @default([])"
      },
      {
        "name": "sessions",
        "type": "BoardGameSession[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessions    BoardGameSession[]"
      },
      {
        "name": "aiResults",
        "type": "BoardGameAiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults   BoardGameAiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-campaign-players",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "campaign_players",
    "displayName": "Campaign Players",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id         String   @id @default(uuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId String"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId     String"
      },
      {
        "name": "role",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"player\"",
        "sourceLine": "role       String   @default(\"player\") // player, co-gm"
      },
      {
        "name": "joinedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "joinedAt   DateTime @default(now())"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign   Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-campaigns",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "campaigns",
    "displayName": "Campaigns",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "genre",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "genre       String   // fantasy, sci-fi, horror, modern, etc."
      },
      {
        "name": "system",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "system      String   // D&D5e, Pathfinder, Call of Cthulhu, custom, board-game"
      },
      {
        "name": "setting",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "setting     String?  // world/universe description"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status      String   @default(\"active\") // active, paused, completed, archived"
      },
      {
        "name": "maxPlayers",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "6",
        "sourceLine": "maxPlayers  Int      @default(6)"
      },
      {
        "name": "gmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gmId        String"
      },
      {
        "name": "gm",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gm          User     @relation(\"CampaignGM\", fields: [gmId], references: [id])"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl    String?"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "tags        String[] @default([])"
      },
      {
        "name": "players",
        "type": "CampaignPlayer[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "players     CampaignPlayer[]"
      },
      {
        "name": "sessions",
        "type": "GameSession[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessions    GameSession[]"
      },
      {
        "name": "characters",
        "type": "Character[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "characters  Character[]"
      },
      {
        "name": "encounters",
        "type": "Encounter[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "encounters  Encounter[]"
      },
      {
        "name": "loreEntries",
        "type": "LoreEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loreEntries LoreEntry[]"
      },
      {
        "name": "npcs",
        "type": "Npc[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "npcs        Npc[]"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults   AiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-characters",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "characters",
    "displayName": "Characters",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String   @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "race",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "race          String?"
      },
      {
        "name": "class",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "class         String?"
      },
      {
        "name": "level",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "level         Int      @default(1)"
      },
      {
        "name": "background",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "background    String?"
      },
      {
        "name": "alignment",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alignment     String?"
      },
      {
        "name": "backstory",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "backstory     String?"
      },
      {
        "name": "personality",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "personality   String?"
      },
      {
        "name": "ideals",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ideals        String?"
      },
      {
        "name": "bonds",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bonds         String?"
      },
      {
        "name": "flaws",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flaws         String?"
      },
      {
        "name": "stats",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"{}\"",
        "sourceLine": "stats         Json     @default(\"{}\")  // STR, DEX, CON, INT, WIS, CHA"
      },
      {
        "name": "skills",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"{}\"",
        "sourceLine": "skills        Json     @default(\"{}\")"
      },
      {
        "name": "equipment",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "equipment     Json     @default(\"[]\")"
      },
      {
        "name": "spells",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "spells        Json     @default(\"[]\")"
      },
      {
        "name": "abilities",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "abilities     Json     @default(\"[]\")"
      },
      {
        "name": "hp",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "hp            Int      @default(10)"
      },
      {
        "name": "maxHp",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "maxHp         Int      @default(10)"
      },
      {
        "name": "ac",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "ac            Int      @default(10)"
      },
      {
        "name": "xp",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "xp            Int      @default(0)"
      },
      {
        "name": "gold",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "gold          Int      @default(0)"
      },
      {
        "name": "avatarUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatarUrl     String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean  @default(true)"
      },
      {
        "name": "campaignId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId    String?"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String"
      },
      {
        "name": "campaign",
        "type": "Campaign?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign      Campaign? @relation(fields: [campaignId], references: [id])"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User      @relation(fields: [userId], references: [id])"
      },
      {
        "name": "combatActions",
        "type": "CombatAction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combatActions CombatAction[]"
      },
      {
        "name": "narratives",
        "type": "Narrative[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "narratives    Narrative[]"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults     AiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-combat-actions",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "combat_actions",
    "displayName": "Combat Actions",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "combatId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combatId    String"
      },
      {
        "name": "combat",
        "type": "Combat",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combat      Combat   @relation(fields: [combatId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "characterId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "characterId String?"
      },
      {
        "name": "character",
        "type": "Character?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "character   Character? @relation(fields: [characterId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String?"
      },
      {
        "name": "user",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User?    @relation(fields: [userId], references: [id])"
      },
      {
        "name": "round",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "round       Int"
      },
      {
        "name": "actorName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actorName   String   // name of combatant (could be monster)"
      },
      {
        "name": "actionType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actionType  String   // attack, spell, ability, move, bonus, reaction, legendary"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String"
      },
      {
        "name": "rollResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rollResult  Json?    // dice roll details"
      },
      {
        "name": "outcome",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outcome     String?  // hit, miss, critical, etc."
      },
      {
        "name": "damage",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "damage      Int?"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-combats",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "combats",
    "displayName": "Combats",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id           String   @id @default(uuid())"
      },
      {
        "name": "encounterId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "encounterId  String?"
      },
      {
        "name": "encounter",
        "type": "Encounter?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "encounter    Encounter? @relation(fields: [encounterId], references: [id])"
      },
      {
        "name": "sessionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId    String?"
      },
      {
        "name": "session",
        "type": "GameSession?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session      GameSession? @relation(fields: [sessionId], references: [id])"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name         String"
      },
      {
        "name": "round",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "round        Int      @default(1)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status       String   @default(\"active\") // active, completed, fled"
      },
      {
        "name": "initiativeOrder",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "initiativeOrder Json  @default(\"[]\")"
      },
      {
        "name": "combatants",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "combatants   Json     @default(\"[]\") // full state of all combatants"
      },
      {
        "name": "conditions",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"{}\"",
        "sourceLine": "conditions   Json     @default(\"{}\") // active conditions per combatant"
      },
      {
        "name": "terrain",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terrain      String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes        String?"
      },
      {
        "name": "startedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "startedAt    DateTime @default(now())"
      },
      {
        "name": "endedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endedAt      DateTime?"
      },
      {
        "name": "actions",
        "type": "CombatAction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actions      CombatAction[]"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults    AiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-encounters",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "encounters",
    "displayName": "Encounters",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "campaignId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId  String?"
      },
      {
        "name": "campaign",
        "type": "Campaign?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign    Campaign? @relation(fields: [campaignId], references: [id])"
      },
      {
        "name": "sessionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId   String?"
      },
      {
        "name": "session",
        "type": "GameSession?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session     GameSession? @relation(fields: [sessionId], references: [id])"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "difficulty",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"medium\"",
        "sourceLine": "difficulty  String   @default(\"medium\") // trivial, easy, medium, hard, deadly"
      },
      {
        "name": "environment",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "environment String?  // dungeon, forest, city, etc."
      },
      {
        "name": "monsters",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "monsters    Json     @default(\"[]\")"
      },
      {
        "name": "rewards",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"{}\"",
        "sourceLine": "rewards     Json     @default(\"{}\")"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"pending\"",
        "sourceLine": "status      String   @default(\"pending\") // pending, active, completed, skipped"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes       String?"
      },
      {
        "name": "combats",
        "type": "Combat[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combats     Combat[]"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults   AiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-game-sessions",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "game_sessions",
    "displayName": "Game Sessions",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId  String"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign    Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "gmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gmId        String"
      },
      {
        "name": "gm",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gm          User     @relation(\"SessionGM\", fields: [gmId], references: [id])"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title       String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"planned\"",
        "sourceLine": "status      String   @default(\"planned\") // planned, active, completed"
      },
      {
        "name": "scheduledAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledAt DateTime?"
      },
      {
        "name": "startedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startedAt   DateTime?"
      },
      {
        "name": "endedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endedAt     DateTime?"
      },
      {
        "name": "summary",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "summary     String?  // AI-generated summary"
      },
      {
        "name": "xpAwarded",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "xpAwarded   Int      @default(0)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes       String?"
      },
      {
        "name": "logs",
        "type": "SessionLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logs        SessionLog[]"
      },
      {
        "name": "encounters",
        "type": "Encounter[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "encounters  Encounter[]"
      },
      {
        "name": "combats",
        "type": "Combat[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combats     Combat[]"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults   AiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-frontend-pages-folder-is-empty-no-spa-ui-shipped-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_frontend_pages_folder_is_empty_no_spa_ui_shipped.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-ai-map-dungeon-image-generation-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_ai_map_dungeon_image_generation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-ai-npc-voice-generation-tts-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_ai_npc_voice_generation_tts.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-ai-rules-arbitration-co-pilot-during-play-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_ai_rules_arbitration_co_pilot_during_play.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-ai-session-recap-summarization-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_ai_session_recap_summarization.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-discord-voice-chat-integration-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_discord_voice_chat_integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-export-of-campaign-archives-pdf-json-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_export_of_campaign_archives_pdf_json.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-notification-system-for-session-reminders-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_notification_system_for_session_reminders.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-player-marketplace-for-homebrew-content-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_player_marketplace_for_homebrew_content.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-virtual-tabletop-vtt-interactive-board-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_virtual_tabletop_vtt_interactive_board.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-src-routes-gap-no-webhook-outbound-api-js-gap-features",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_webhook_outbound_api.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-lore-entries",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "lore_entries",
    "displayName": "Lore Entries",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId  String"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign    Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String   // location, faction, history, item, deity, etc."
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title       String"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content     String"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "tags        String[] @default([])"
      },
      {
        "name": "isSecret",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isSecret    Boolean  @default(false)"
      },
      {
        "name": "revealedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revealedAt  DateTime?"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-narratives",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "narratives",
    "displayName": "Narratives",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id           String   @id @default(uuid())"
      },
      {
        "name": "campaignId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId   String?"
      },
      {
        "name": "characterId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "characterId  String?"
      },
      {
        "name": "character",
        "type": "Character?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "character    Character? @relation(fields: [characterId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId       String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user         User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type         String   // scene, backstory, dream, vision, cutscene"
      },
      {
        "name": "prompt",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt       String"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content      String   // AI-generated narrative text"
      },
      {
        "name": "mood",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood         String?"
      },
      {
        "name": "tags",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "[]",
        "sourceLine": "tags         String[] @default([])"
      },
      {
        "name": "isPublic",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isPublic     Boolean  @default(true)"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults    AiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-npcs",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "npcs",
    "displayName": "Npcs",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id           String   @id @default(uuid())"
      },
      {
        "name": "campaignId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignId   String"
      },
      {
        "name": "campaign",
        "type": "Campaign",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign     Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name         String"
      },
      {
        "name": "race",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "race         String?"
      },
      {
        "name": "class",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "class        String?"
      },
      {
        "name": "role",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role         String?  // merchant, villain, ally, neutral"
      },
      {
        "name": "personality",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "personality  String?"
      },
      {
        "name": "backstory",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "backstory    String?"
      },
      {
        "name": "motivation",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "motivation   String?"
      },
      {
        "name": "secrets",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secrets      String?"
      },
      {
        "name": "stats",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"{}\"",
        "sourceLine": "stats        Json     @default(\"{}\")"
      },
      {
        "name": "equipment",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "equipment    Json     @default(\"[]\")"
      },
      {
        "name": "dialogue",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"[]\"",
        "sourceLine": "dialogue     Json     @default(\"[]\") // sample dialogue lines"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location     String?"
      },
      {
        "name": "isAlive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isAlive      Boolean  @default(true)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes        String?"
      },
      {
        "name": "avatarUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatarUrl    String?"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults    AiResult[]"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-session-logs",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "session_logs",
    "displayName": "Session Logs",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id        String   @id @default(uuid())"
      },
      {
        "name": "sessionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionId String"
      },
      {
        "name": "session",
        "type": "GameSession",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session   GameSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId    String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user      User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type      String   // narration, action, dialogue, roll, system"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content   String"
      },
      {
        "name": "metadata",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"{}\"",
        "sourceLine": "metadata  Json     @default(\"{}\")"
      }
    ]
  },
  {
    "id": "ai-board-game-ttrpg-game-master-backend-prisma-schema-prisma-users",
    "sourceProject": "AIBoardGameTTRPGGameMaster",
    "name": "users",
    "displayName": "Users",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id           String   @id @default(uuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email        String   @unique"
      },
      {
        "name": "username",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "username     String   @unique"
      },
      {
        "name": "passwordHash",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordHash String"
      },
      {
        "name": "displayName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "displayName  String?"
      },
      {
        "name": "avatarUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatarUrl    String?"
      },
      {
        "name": "role",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"player\"",
        "sourceLine": "role         String   @default(\"player\") // player, gm, admin"
      },
      {
        "name": "campaigns",
        "type": "Campaign[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaigns     Campaign[]     @relation(\"CampaignGM\")"
      },
      {
        "name": "campaignPlayers",
        "type": "CampaignPlayer[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaignPlayers CampaignPlayer[]"
      },
      {
        "name": "characters",
        "type": "Character[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "characters    Character[]"
      },
      {
        "name": "aiResults",
        "type": "AiResult[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResults     AiResult[]"
      },
      {
        "name": "sessions",
        "type": "GameSession[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessions      GameSession[]  @relation(\"SessionGM\")"
      },
      {
        "name": "sessionLogs",
        "type": "SessionLog[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sessionLogs   SessionLog[]"
      },
      {
        "name": "combatActions",
        "type": "CombatAction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "combatActions CombatAction[]"
      },
      {
        "name": "narratives",
        "type": "Narrative[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "narratives    Narrative[]"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-routes-ai-js-ai-analyses",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "backend/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "analysis_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50)"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-routes-ai-new-js-ai-analyses",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "backend/routes/aiNew.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "analysis_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50)"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-db-schema-sql-matches",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "matches",
    "displayName": "Matches",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "team1_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team1_id INTEGER REFERENCES teams(id) ON DELETE SET NULL"
      },
      {
        "name": "team2_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team2_id INTEGER REFERENCES teams(id) ON DELETE SET NULL"
      },
      {
        "name": "tournament_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tournament_id INTEGER REFERENCES tournaments(id) ON DELETE SET NULL"
      },
      {
        "name": "match_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_date TIMESTAMP"
      },
      {
        "name": "score_team1",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score_team1 INTEGER"
      },
      {
        "name": "score_team2",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score_team2 INTEGER"
      },
      {
        "name": "map",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "map VARCHAR(100)"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "winner_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "winner_id INTEGER REFERENCES teams(id) ON DELETE SET NULL"
      },
      {
        "name": "vod_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vod_url VARCHAR(500)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-db-schema-sql-players",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "players",
    "displayName": "Players",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "username",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "username VARCHAR(255) NOT NULL"
      },
      {
        "name": "real_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "real_name VARCHAR(255)"
      },
      {
        "name": "team_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_id INTEGER REFERENCES teams(id) ON DELETE SET NULL"
      },
      {
        "name": "game",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game VARCHAR(100)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "apm",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "apm DECIMAL(10,2)"
      },
      {
        "name": "accuracy",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accuracy DECIMAL(5,2)"
      },
      {
        "name": "positioning_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "positioning_score DECIMAL(5,2)"
      },
      {
        "name": "kda",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kda DECIMAL(5,2)"
      },
      {
        "name": "winrate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "winrate DECIMAL(5,2)"
      },
      {
        "name": "avatar_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar_url VARCHAR(500)"
      },
      {
        "name": "bio",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bio TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-db-schema-sql-teams",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "teams",
    "displayName": "Teams",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "game",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game VARCHAR(100)"
      },
      {
        "name": "region",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region VARCHAR(100)"
      },
      {
        "name": "ranking",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ranking INTEGER"
      },
      {
        "name": "wins",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "wins INTEGER DEFAULT 0"
      },
      {
        "name": "losses",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "losses INTEGER DEFAULT 0"
      },
      {
        "name": "coach",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coach VARCHAR(255)"
      },
      {
        "name": "founded_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "founded_year INTEGER"
      },
      {
        "name": "logo_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo_url VARCHAR(500)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-db-schema-sql-tournaments",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "tournaments",
    "displayName": "Tournaments",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "game",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game VARCHAR(100)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "prize_pool",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prize_pool DECIMAL(15,2)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'upcoming'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'upcoming'"
      },
      {
        "name": "organizer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "organizer VARCHAR(255)"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(100)"
      },
      {
        "name": "max_teams",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_teams INTEGER"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-db-schema-sql-training-schedules",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "training_schedules",
    "displayName": "Training Schedules",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "player_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "player_id INTEGER REFERENCES players(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "focus_area",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "focus_area VARCHAR(100)"
      },
      {
        "name": "intensity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "intensity VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "coach_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coach_notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-db-schema-sql-users",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'analyst'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'analyst'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-backend-routes-ai-new-js-wellness-logs",
    "sourceProject": "AIEsportsPerformanceAnalyzer",
    "name": "wellness_logs",
    "displayName": "Wellness Logs",
    "framework": "SQL",
    "sourceFile": "backend/routes/aiNew.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "player_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "player_id INTEGER NOT NULL"
      },
      {
        "name": "sleep_hours",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sleep_hours NUMERIC(4,1)"
      },
      {
        "name": "stress_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stress_level INTEGER CHECK (stress_level BETWEEN 1 AND 10)"
      },
      {
        "name": "mood",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood VARCHAR(50)"
      },
      {
        "name": "burnout_risk_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "burnout_risk_analysis TEXT"
      },
      {
        "name": "logged_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "logged_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-asset-comments-js-asset-comments",
    "sourceProject": "AIGameAssetGenerator",
    "name": "asset_comments",
    "displayName": "Asset Comments",
    "framework": "SQL",
    "sourceFile": "backend/routes/assetComments.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "asset_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset_id INTEGER NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL"
      },
      {
        "name": "parent_comment_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_comment_id INTEGER"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-asset-comments-js-asset-shares",
    "sourceProject": "AIGameAssetGenerator",
    "name": "asset_shares",
    "displayName": "Asset Shares",
    "framework": "SQL",
    "sourceFile": "backend/routes/assetComments.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "asset_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset_id INTEGER NOT NULL"
      },
      {
        "name": "owner_user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner_user_id INTEGER NOT NULL"
      },
      {
        "name": "shared_with_user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shared_with_user_id INTEGER NOT NULL"
      },
      {
        "name": "scope",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'read'",
        "sourceLine": "scope TEXT NOT NULL DEFAULT 'read'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-asset-versions-js-asset-versions",
    "sourceProject": "AIGameAssetGenerator",
    "name": "asset_versions",
    "displayName": "Asset Versions",
    "framework": "SQL",
    "sourceFile": "backend/routes/assetVersions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "asset_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset_id INTEGER NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL"
      },
      {
        "name": "version_number",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version_number INTEGER NOT NULL"
      },
      {
        "name": "branch_name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'main'",
        "sourceLine": "branch_name TEXT DEFAULT 'main'"
      },
      {
        "name": "parent_version_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_version_id INTEGER"
      },
      {
        "name": "changelog",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changelog TEXT"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-seed-js-assets",
    "sourceProject": "AIGameAssetGenerator",
    "name": "assets",
    "displayName": "Assets",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "metadata JSONB DEFAULT '{}'"
      },
      {
        "name": "image_prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "''",
        "sourceLine": "image_prompt TEXT DEFAULT ''"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-collections-js-collection-assets",
    "sourceProject": "AIGameAssetGenerator",
    "name": "collection_assets",
    "displayName": "Collection Assets",
    "framework": "SQL",
    "sourceFile": "backend/routes/collections.js",
    "columns": [
      {
        "name": "collection_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "collection_id INTEGER REFERENCES collections(id) ON DELETE CASCADE"
      },
      {
        "name": "asset_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset_id INTEGER REFERENCES assets(id) ON DELETE CASCADE"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-collections-js-collections",
    "sourceProject": "AIGameAssetGenerator",
    "name": "collections",
    "displayName": "Collections",
    "framework": "SQL",
    "sourceFile": "backend/routes/collections.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-engine-export-advisor-js-engine-export-advice",
    "sourceProject": "AIGameAssetGenerator",
    "name": "engine_export_advice",
    "displayName": "Engine Export Advice",
    "framework": "SQL",
    "sourceFile": "backend/routes/engineExportAdvisor.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "asset_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset_id INTEGER"
      },
      {
        "name": "engine",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engine TEXT"
      },
      {
        "name": "platform",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "platform TEXT"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-animation-generation-endpoint-rigging-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-animation-generation-endpoint-rigging.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-file-upload-pipeline-detected-beyond-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-file-upload-pipeline-detected-beyond.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-game-engine-export-unity-unreal-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-game-engine-export-unity-unreal.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-marketplace-for-selling-assets-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-marketplace-for-selling-assets.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-payment-royalty-handling-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-payment-royalty-handling.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-prompt-improvement-helper-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-prompt-improvement-helper.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-public-sharing-portfolio-pages-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-public-sharing-portfolio-pages.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-real-time-collaboration-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-real-time-collaboration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-scene-composition-endpoint-multi-asse-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-scene-composition-endpoint-multi-asse.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-style-transfer-endpoint-apply-art-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-style-transfer-endpoint-apply-art.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-texture-refinement-endpoint-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-texture-refinement-endpoint.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-gap-no-webhook-integration-for-engine-sync-js-gap-features",
    "sourceProject": "AIGameAssetGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-webhook-integration-for-engine-sync.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-routes-custom-views-js-generation-rules",
    "sourceProject": "AIGameAssetGenerator",
    "name": "generation_rules",
    "displayName": "Generation Rules",
    "framework": "SQL",
    "sourceFile": "backend/routes/customViews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "kind",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'prompt'",
        "sourceLine": "kind VARCHAR(50) NOT NULL DEFAULT 'prompt'"
      },
      {
        "name": "prompt",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "''",
        "sourceLine": "prompt TEXT NOT NULL DEFAULT ''"
      },
      {
        "name": "dimensions",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'1024x1024'",
        "sourceLine": "dimensions VARCHAR(50) NOT NULL DEFAULT '1024x1024'"
      },
      {
        "name": "style_tokens",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "style_tokens TEXT[] DEFAULT '{}'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-game-asset-generator-backend-seed-js-users",
    "sourceProject": "AIGameAssetGenerator",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-ai-analyses",
    "sourceProject": "AISportsAnalytics",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100) NOT NULL"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB NOT NULL"
      },
      {
        "name": "result_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_data JSONB NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(255)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-ai-picks-history",
    "sourceProject": "AISportsAnalytics",
    "name": "ai_picks_history",
    "displayName": "Ai Picks History",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "ai_analysis_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis_id INTEGER REFERENCES ai_analyses(id) ON DELETE SET NULL"
      },
      {
        "name": "betting_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "betting_id INTEGER REFERENCES betting_analyses(id) ON DELETE SET NULL"
      },
      {
        "name": "predicted_winner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predicted_winner VARCHAR(255)"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "sport",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sport VARCHAR(100)"
      },
      {
        "name": "match_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_name VARCHAR(255)"
      },
      {
        "name": "actual_outcome",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_outcome VARCHAR(255)"
      },
      {
        "name": "is_correct",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "is_correct BOOLEAN"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-audit-logs",
    "sourceProject": "AISportsAnalytics",
    "name": "audit_logs",
    "displayName": "Audit Logs",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-betting-analyses",
    "sourceProject": "AISportsAnalytics",
    "name": "betting_analyses",
    "displayName": "Betting Analyses",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "match_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sport",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sport VARCHAR(100) NOT NULL"
      },
      {
        "name": "team_a",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_a VARCHAR(255) NOT NULL"
      },
      {
        "name": "team_b",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_b VARCHAR(255) NOT NULL"
      },
      {
        "name": "odds_team_a",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "odds_team_a DECIMAL(10,2)"
      },
      {
        "name": "odds_team_b",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "odds_team_b DECIMAL(10,2)"
      },
      {
        "name": "odds_draw",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "odds_draw DECIMAL(10,2)"
      },
      {
        "name": "predicted_winner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predicted_winner VARCHAR(255)"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "analysis_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_notes TEXT"
      },
      {
        "name": "match_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_date TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-contact-messages",
    "sourceProject": "AISportsAnalytics",
    "name": "contact_messages",
    "displayName": "Contact Messages",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) NOT NULL"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'support'",
        "sourceLine": "category VARCHAR(100) DEFAULT 'support'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "admin_reply",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "admin_reply TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-email-verifications",
    "sourceProject": "AISportsAnalytics",
    "name": "email_verifications",
    "displayName": "Email Verifications",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "token",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "token VARCHAR(255) NOT NULL"
      },
      {
        "name": "verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "verified BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-esports-stats",
    "sourceProject": "AISportsAnalytics",
    "name": "esports_stats",
    "displayName": "Esports Stats",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "player_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "player_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "game_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game_title VARCHAR(255) NOT NULL"
      },
      {
        "name": "team_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_name VARCHAR(255)"
      },
      {
        "name": "region",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region VARCHAR(100)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(100)"
      },
      {
        "name": "matches_played",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "matches_played INTEGER DEFAULT 0"
      },
      {
        "name": "wins",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "wins INTEGER DEFAULT 0"
      },
      {
        "name": "losses",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "losses INTEGER DEFAULT 0"
      },
      {
        "name": "kda_ratio",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kda_ratio DECIMAL(10,2)"
      },
      {
        "name": "avg_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avg_score DECIMAL(10,2)"
      },
      {
        "name": "ranking",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ranking INTEGER"
      },
      {
        "name": "earnings",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "earnings DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-fantasy-players",
    "sourceProject": "AISportsAnalytics",
    "name": "fantasy_players",
    "displayName": "Fantasy Players",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "team_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_id INTEGER REFERENCES fantasy_teams(id) ON DELETE CASCADE"
      },
      {
        "name": "player_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "player_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "position",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "position VARCHAR(100)"
      },
      {
        "name": "real_team",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "real_team VARCHAR(255)"
      },
      {
        "name": "price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price DECIMAL(10,2)"
      },
      {
        "name": "projected_points",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projected_points DECIMAL(10,2)"
      },
      {
        "name": "form_rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "form_rating DECIMAL(5,2)"
      },
      {
        "name": "injury_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Healthy'",
        "sourceLine": "injury_status VARCHAR(100) DEFAULT 'Healthy'"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-fantasy-teams",
    "sourceProject": "AISportsAnalytics",
    "name": "fantasy_teams",
    "displayName": "Fantasy Teams",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "team_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sport",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sport VARCHAR(100) NOT NULL"
      },
      {
        "name": "budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget DECIMAL(12,2)"
      },
      {
        "name": "total_points",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_points DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "player_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "player_count INTEGER DEFAULT 0"
      },
      {
        "name": "formation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "formation VARCHAR(50)"
      },
      {
        "name": "strategy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strategy TEXT"
      },
      {
        "name": "optimization_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optimization_score DECIMAL(5,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-favorites",
    "sourceProject": "AISportsAnalytics",
    "name": "favorites",
    "displayName": "Favorites",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "entity_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sport",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sport VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-feedback",
    "sourceProject": "AISportsAnalytics",
    "name": "feedback",
    "displayName": "Feedback",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "rating",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "rating INTEGER DEFAULT 5"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "admin_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "admin_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-file-uploads",
    "sourceProject": "AISportsAnalytics",
    "name": "file_uploads",
    "displayName": "File Uploads",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename VARCHAR(255) NOT NULL"
      },
      {
        "name": "original_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "file_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_type VARCHAR(100)"
      },
      {
        "name": "file_size",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size INTEGER"
      },
      {
        "name": "upload_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "upload_path VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-game-strategies",
    "sourceProject": "AISportsAnalytics",
    "name": "game_strategies",
    "displayName": "Game Strategies",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "game_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "strategy_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strategy_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "difficulty_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "difficulty_level VARCHAR(50)"
      },
      {
        "name": "win_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "win_rate DECIMAL(5,2)"
      },
      {
        "name": "key_moves",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_moves TEXT"
      },
      {
        "name": "counter_strategies",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "counter_strategies TEXT"
      },
      {
        "name": "best_situations",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "best_situations TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-ai-driven-injury-impact-prediction-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoAiDrivenInjuryImpactPrediction.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-integration-with-official-league-data-apis-espn-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoIntegrationWithOfficialLeagueDataApisEspn.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-live-betting-probability-updates-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoLiveBettingProbabilityUpdates.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-live-chat-for-user-discussion-tips-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoLiveChatForUserDiscussionTips.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-multi-sport-cross-impact-modeling-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoMultiSportCrossImpactModeling.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-player-performance-regression-modeling-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoPlayerPerformanceRegressionModeling.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-social-features-following-picks-leaderboards-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoSocialFeaturesFollowingPicksLeaderboards.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-third-party-integrations-beyond-import-export-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoThirdPartyIntegrationsBeyondImportExport.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-routes-gap-no-webhooks-for-downstream-notifications-js-gap-features",
    "sourceProject": "AISportsAnalytics",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoWebhooksForDownstreamNotifications.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-notifications",
    "sourceProject": "AISportsAnalytics",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "read BOOLEAN DEFAULT false"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'normal'"
      },
      {
        "name": "related_entity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_entity VARCHAR(100)"
      },
      {
        "name": "related_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-password-resets",
    "sourceProject": "AISportsAnalytics",
    "name": "password_resets",
    "displayName": "Password Resets",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "token",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "token VARCHAR(255) NOT NULL"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "used",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "used BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-referee-incidents",
    "sourceProject": "AISportsAnalytics",
    "name": "referee_incidents",
    "displayName": "Referee Incidents",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "match_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sport",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sport VARCHAR(100) NOT NULL"
      },
      {
        "name": "incident_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_type VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "time_occurred",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_occurred VARCHAR(50)"
      },
      {
        "name": "players_involved",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "players_involved TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50)"
      },
      {
        "name": "ai_ruling",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_ruling TEXT"
      },
      {
        "name": "actual_ruling",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_ruling TEXT"
      },
      {
        "name": "video_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "video_url VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-search-history",
    "sourceProject": "AISportsAnalytics",
    "name": "search_history",
    "displayName": "Search History",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "query",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "query VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'all'",
        "sourceLine": "entity_type VARCHAR(100) DEFAULT 'all'"
      },
      {
        "name": "results_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "results_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-user-profiles",
    "sourceProject": "AISportsAnalytics",
    "name": "user_profiles",
    "displayName": "User Profiles",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "display_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name VARCHAR(255)"
      },
      {
        "name": "bio",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bio TEXT"
      },
      {
        "name": "avatar_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar_url VARCHAR(500)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "favorite_sport",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "favorite_sport VARCHAR(100)"
      },
      {
        "name": "experience_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Beginner'",
        "sourceLine": "experience_level VARCHAR(50) DEFAULT 'Beginner'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-user-settings",
    "sourceProject": "AISportsAnalytics",
    "name": "user_settings",
    "displayName": "User Settings",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "theme",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'dark'",
        "sourceLine": "theme VARCHAR(50) DEFAULT 'dark'"
      },
      {
        "name": "language",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'en'",
        "sourceLine": "language VARCHAR(50) DEFAULT 'en'"
      },
      {
        "name": "notifications_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "notifications_enabled BOOLEAN DEFAULT true"
      },
      {
        "name": "email_alerts",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "email_alerts BOOLEAN DEFAULT true"
      },
      {
        "name": "timezone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'UTC'",
        "sourceLine": "timezone VARCHAR(100) DEFAULT 'UTC'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-users",
    "sourceProject": "AISportsAnalytics",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "email_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "email_verified BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-sports-analytics-server-db-setup-js-weekly-insights",
    "sourceProject": "AISportsAnalytics",
    "name": "weekly_insights",
    "displayName": "Weekly Insights",
    "framework": "SQL",
    "sourceFile": "server/db/setup.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "week_start",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "week_start DATE NOT NULL"
      },
      {
        "name": "week_end",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "week_end DATE NOT NULL"
      },
      {
        "name": "digest",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "digest JSONB NOT NULL"
      },
      {
        "name": "analyses_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "analyses_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-ai-analyses",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "ai_analyses",
    "displayName": "Ai Analyses",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100) NOT NULL CHECK (type IN ('team_balance', 'schedule_optimization', 'player_development', 'matchup_prediction', 'facility_usage', 'referee_assignment', 'performance_trend', 'injury_risk'))"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "input_data JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "output_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "output_data JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'gpt-4'",
        "sourceLine": "model_used VARCHAR(100) NOT NULL DEFAULT 'gpt-4'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-communications",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "communications",
    "displayName": "Communications",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL CHECK (type IN ('announcement', 'alert', 'message', 'reminder', 'newsletter', 'emergency'))"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(20) NOT NULL DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent'))"
      },
      {
        "name": "sender_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "recipient_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient_type VARCHAR(50) NOT NULL CHECK (recipient_type IN ('all', 'team', 'individual', 'coaches', 'parents', 'referees'))"
      },
      {
        "name": "recipient_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient_id INTEGER"
      },
      {
        "name": "team_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_id INTEGER REFERENCES teams(id) ON DELETE SET NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'delivered', 'read', 'archived'))"
      },
      {
        "name": "sent_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sent_at TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-facilities",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "facilities",
    "displayName": "Facilities",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address VARCHAR(500) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100) NOT NULL CHECK (type IN ('soccer_field', 'basketball_court', 'baseball_diamond', 'multi_purpose', 'gymnasium', 'swimming_pool', 'tennis_court', 'track_field'))"
      },
      {
        "name": "capacity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "100",
        "sourceLine": "capacity INTEGER NOT NULL DEFAULT 100"
      },
      {
        "name": "has_lights",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "has_lights BOOLEAN NOT NULL DEFAULT FALSE"
      },
      {
        "name": "has_parking",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "has_parking BOOLEAN NOT NULL DEFAULT TRUE"
      },
      {
        "name": "indoor",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "indoor BOOLEAN NOT NULL DEFAULT FALSE"
      },
      {
        "name": "surface_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "surface_type VARCHAR(100) CHECK (surface_type IN ('natural_grass', 'artificial_turf', 'hardwood', 'concrete', 'clay', 'synthetic', 'rubber', 'dirt'))"
      },
      {
        "name": "available_days",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Mon",
        "sourceLine": "available_days VARCHAR(100) DEFAULT 'Mon"
      },
      {
        "name": "available_hours_start",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'08:00:00'",
        "sourceLine": "available_hours_start TIME DEFAULT '08:00:00'"
      },
      {
        "name": "available_hours_end",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'21:00:00'",
        "sourceLine": "available_hours_end TIME DEFAULT '21:00:00'"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.00",
        "sourceLine": "hourly_rate DECIMAL(8,2) DEFAULT 0.00"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'maintenance', 'closed', 'reserved'))"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-fair-play-reports",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "fair_play_reports",
    "displayName": "Fair Play Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "game_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game_id INTEGER"
      },
      {
        "name": "ai_summary",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_summary JSONB"
      },
      {
        "name": "flags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flags TEXT[]"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-fundraising-campaigns",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "fundraising_campaigns",
    "displayName": "Fundraising Campaigns",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "season_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season_id INTEGER"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(150)"
      },
      {
        "name": "goal_amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goal_amount NUMERIC(12,2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-fundraising-donations",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "fundraising_donations",
    "displayName": "Fundraising Donations",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "campaign_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "campaign_id INTEGER"
      },
      {
        "name": "donor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "donor_name VARCHAR(150)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC(12,2)"
      },
      {
        "name": "anonymous",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "anonymous BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "received_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "received_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-games",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "games",
    "displayName": "Games",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "home_team_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "home_team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE"
      },
      {
        "name": "away_team_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "away_team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE"
      },
      {
        "name": "facility_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "facility_id INTEGER REFERENCES facilities(id) ON DELETE SET NULL"
      },
      {
        "name": "game_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game_date DATE NOT NULL"
      },
      {
        "name": "game_time",
        "type": "TIME",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "game_time TIME NOT NULL"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "60",
        "sourceLine": "duration_minutes INTEGER NOT NULL DEFAULT 60"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled', 'postponed', 'forfeit'))"
      },
      {
        "name": "home_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "home_score INTEGER DEFAULT 0"
      },
      {
        "name": "away_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "away_score INTEGER DEFAULT 0"
      },
      {
        "name": "season_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season_id INTEGER REFERENCES seasons(id) ON DELETE SET NULL"
      },
      {
        "name": "referee_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referee_id INTEGER REFERENCES referees(id) ON DELETE SET NULL"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-batch09-gap-ai-js-gap-features",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/batch09GapAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-batch09-gap-nonai-js-gap-features",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/batch09GapNonai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-ltad-progressions",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "ltad_progressions",
    "displayName": "Ltad Progressions",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "player_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "player_id INTEGER"
      },
      {
        "name": "ai_summary",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_summary JSONB"
      },
      {
        "name": "stage",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stage VARCHAR(40)"
      },
      {
        "name": "next_focus",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_focus TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-players",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "players",
    "displayName": "Players",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "age",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age INTEGER NOT NULL CHECK (age >= 4 AND age <= 19)"
      },
      {
        "name": "date_of_birth",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_of_birth DATE NOT NULL"
      },
      {
        "name": "gender",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gender VARCHAR(20) NOT NULL CHECK (gender IN ('male', 'female', 'non_binary'))"
      },
      {
        "name": "skill_level",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "skill_level INTEGER NOT NULL DEFAULT 5 CHECK (skill_level >= 1 AND skill_level <= 10)"
      },
      {
        "name": "position",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "position VARCHAR(50)"
      },
      {
        "name": "team_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_id INTEGER REFERENCES teams(id) ON DELETE SET NULL"
      },
      {
        "name": "parent_email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_email VARCHAR(255) NOT NULL"
      },
      {
        "name": "parent_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_phone VARCHAR(20)"
      },
      {
        "name": "emergency_contact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergency_contact VARCHAR(255)"
      },
      {
        "name": "medical_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "medical_notes TEXT"
      },
      {
        "name": "registration_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "registration_date DATE NOT NULL DEFAULT CURRENT_DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'injured', 'suspended', 'waitlisted'))"
      },
      {
        "name": "season_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season_id INTEGER REFERENCES seasons(id) ON DELETE SET NULL"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-recruitment-profiles",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "recruitment_profiles",
    "displayName": "Recruitment Profiles",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "player_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "player_id INTEGER"
      },
      {
        "name": "opt_in",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "opt_in BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "academic_gpa",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "academic_gpa NUMERIC(4,2)"
      },
      {
        "name": "graduation_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "graduation_year INTEGER"
      },
      {
        "name": "target_division",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_division VARCHAR(20)"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(120)"
      },
      {
        "name": "consent_recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "consent_recorded_at TIMESTAMP"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-referees",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "referees",
    "displayName": "Referees",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "certification_level",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification_level VARCHAR(50) NOT NULL CHECK (certification_level IN ('grassroots', 'regional', 'national', 'fifa'))"
      },
      {
        "name": "years_experience",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "years_experience INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "max_games_per_week",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "3",
        "sourceLine": "max_games_per_week INTEGER NOT NULL DEFAULT 3"
      },
      {
        "name": "availability_days",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Sat",
        "sourceLine": "availability_days VARCHAR(100) DEFAULT 'Sat"
      },
      {
        "name": "specializations",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specializations VARCHAR(255)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5.0",
        "sourceLine": "rating DECIMAL(3,1) DEFAULT 5.0 CHECK (rating >= 0 AND rating <= 10)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended', 'on_leave'))"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-seasons",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "seasons",
    "displayName": "Seasons",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE NOT NULL"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE NOT NULL"
      },
      {
        "name": "registration_deadline",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "registration_deadline DATE NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'upcoming'",
        "sourceLine": "status VARCHAR(50) NOT NULL DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'registration', 'active', 'playoffs', 'completed', 'cancelled'))"
      },
      {
        "name": "max_teams",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "16",
        "sourceLine": "max_teams INTEGER NOT NULL DEFAULT 16"
      },
      {
        "name": "division",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "division VARCHAR(100)"
      },
      {
        "name": "age_group",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age_group VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-standings",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "standings",
    "displayName": "Standings",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "team_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE"
      },
      {
        "name": "season_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season_id INTEGER NOT NULL REFERENCES seasons(id) ON DELETE CASCADE"
      },
      {
        "name": "wins",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "wins INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "losses",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "losses INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "draws",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "draws INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "points",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "points INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "goals_for",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "goals_for INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "goals_against",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "goals_against INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "goal_difference",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "goal_difference INTEGER NOT NULL DEFAULT 0"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-teams",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "teams",
    "displayName": "Teams",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "division",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "division VARCHAR(100) NOT NULL"
      },
      {
        "name": "age_group",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age_group VARCHAR(50) NOT NULL"
      },
      {
        "name": "head_coach",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "head_coach VARCHAR(255)"
      },
      {
        "name": "assistant_coach",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assistant_coach VARCHAR(255)"
      },
      {
        "name": "max_players",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "18",
        "sourceLine": "max_players INTEGER NOT NULL DEFAULT 18"
      },
      {
        "name": "home_facility_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "home_facility_id INTEGER REFERENCES facilities(id) ON DELETE SET NULL"
      },
      {
        "name": "season_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season_id INTEGER REFERENCES seasons(id) ON DELETE SET NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-tournament-brackets",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "tournament_brackets",
    "displayName": "Tournament Brackets",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tournament_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tournament_id INTEGER"
      },
      {
        "name": "round",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "round INTEGER"
      },
      {
        "name": "seed_a",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seed_a INTEGER"
      },
      {
        "name": "seed_b",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seed_b INTEGER"
      },
      {
        "name": "team_a",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_a INTEGER"
      },
      {
        "name": "team_b",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_b INTEGER"
      },
      {
        "name": "winner_team_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "winner_team_id INTEGER"
      },
      {
        "name": "scheduled_for",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_for TIMESTAMP"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-tournaments",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "tournaments",
    "displayName": "Tournaments",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(150)"
      },
      {
        "name": "season_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season_id INTEGER"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(40)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'planned'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-db-schema-sql-users",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/db/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'parent'",
        "sourceLine": "role VARCHAR(50) NOT NULL DEFAULT 'parent' CHECK (role IN ('admin', 'coach', 'parent', 'referee'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-volunteer-assignments",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "volunteer_assignments",
    "displayName": "Volunteer Assignments",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "volunteer_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "volunteer_id INTEGER"
      },
      {
        "name": "team_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_id INTEGER"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(80)"
      },
      {
        "name": "match_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "match_score INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-youth-sports-league-manager-backend-src-routes-extensions-js-volunteers",
    "sourceProject": "AIYouthSportsLeagueManager",
    "name": "volunteers",
    "displayName": "Volunteers",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(150)"
      },
      {
        "name": "contact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact VARCHAR(150)"
      },
      {
        "name": "skills",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skills TEXT[]"
      },
      {
        "name": "availability",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "availability JSONB"
      },
      {
        "name": "background_check_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'unknown'",
        "sourceLine": "background_check_status VARCHAR(40) DEFAULT 'unknown'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  }
];
