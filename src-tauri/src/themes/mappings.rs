use rusqlite::Row;

use super::dto::Theme;

impl Theme {
    pub fn from_row(row: &Row) -> rusqlite::Result<Self> {
        Ok(Self {
            id: row.get(0)?,
            background: row.get(1)?,
            foreground: row.get(2)?,
            card: row.get(3)?,
            card_foreground: row.get(4)?,
            popover: row.get(5)?,
            popover_foreground: row.get(6)?,
            primary: row.get(7)?,
            primary_foreground: row.get(8)?,
            secondary: row.get(9)?,
            secondary_foreground: row.get(10)?,
            muted: row.get(11)?,
            muted_foreground: row.get(12)?,
            accent: row.get(13)?,
            accent_foreground: row.get(14)?,
            destructive: row.get(15)?,
            border: row.get(16)?,
            input: row.get(17)?,
            ring: row.get(18)?,
            chart_1: row.get(19)?,
            chart_2: row.get(20)?,
            chart_3: row.get(21)?,
            chart_4: row.get(22)?,
            chart_5: row.get(23)?,
            sidebar: row.get(24)?,
            sidebar_foreground: row.get(25)?,
            sidebar_primary: row.get(26)?,
            sidebar_primary_foreground: row.get(27)?,
            sidebar_accent: row.get(28)?,
            sidebar_accent_foreground: row.get(29)?,
            sidebar_border: row.get(30)?,
            sidebar_ring: row.get(31)?,
            shadow_color: row.get(32)?,
            card_border: row.get(33)?,
        })
    }
}
