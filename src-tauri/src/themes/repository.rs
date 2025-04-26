

use crate::sqlite::connect::DB;

use super::dto::{self, Theme};

pub fn get_all_themes() -> rusqlite::Result<Vec<Theme>> {
    let con: std::sync::MutexGuard<'_, rusqlite::Connection> = DB.lock().expect("connection failed...");
    read_all_themes(con)
}


fn read_all_themes(db: std::sync::MutexGuard<'_, rusqlite::Connection>) -> rusqlite::Result<Vec<Theme>> {
    let mut statement = db.prepare("select * from themes")?;
    let themes_in_db = statement.query_map([], |row| {
        dto::Theme::from_row(row)
    })?;

    let  mut themes = Vec::new();
    
    for theme in themes_in_db {
        themes.push(theme?);
    }

    Ok(themes)
}