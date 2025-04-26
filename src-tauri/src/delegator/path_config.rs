use crate::themes::controller::get_themes;
use crate::sqlite::connect::DB;
use crate::util::errors::Result;
use crate::util::builder::response;

use once_cell::sync::Lazy;
use serde::Serialize;
use super::forward_content::{RequestAttrs, ResponseAttrs};
use rusqlite::{params, Connection};



#[derive(Debug, Serialize)]
struct Stores {
    pub id: i32,
    pub name: String,
    pub location: String,
} 


// fn a(request: &RequestAttrs) -> String {
//     let conn = Connection::open("/home/fa064152/.config/beekeeper-studio/demo.db").expect("msg");

//     let mut stmt = conn.prepare("select id, name, location from stores;").expect("msg1");

//     // let stores = stmt

//     let store_iter = stmt.query_map([], |row| {
//         Ok(Stores {
//             id: row.get(0)?,
//             name: row.get(1)?,
//             location: row.get(2)?,
//         })
//     }).expect("not found");


// #[derive(Debug, Serialize)]
// struct Stores {
//     pub id: i32,
//     pub name: String,
//     pub location: String,
// } 


fn a(_request: &RequestAttrs) -> Result<String> {
    // let conn = Connection::open("/home/fa064152/.config/beekeeper-studio/demo.db").expect("msg");
    let conn = DB.lock().unwrap();
    let mut stmt = conn.prepare("select id, name, location from stores;").expect("msg1");

    // let stores = stmt

    let user_iter = stmt.query_map([], |row| {
        Ok(Stores {
            id: row.get(0)?,
            name: row.get(1)?,
            location: row.get(2)?,
        })
    }).expect("not found");

    let mut stores = Vec::new();
    for store in user_iter {
        stores.push(store.unwrap());
    }

    response(stores)
    // let som = serde_json::to_string(&stores);
    // Ok(som?)
    // let a = ResponseAttrs { content: stores };
    
}


// fn b(request: &RequestAttrs) -> Result<String> { 
//     // Ok(format!("b: {}", request.path)) 
//     response(format!("b: {}"))
// }


pub static PATHS: Lazy<Vec<(&'static str, fn(&RequestAttrs) -> Result<String>)>> = Lazy::new(|| vec![
    ("/a", a),
    // ("/b", b),
    ("/themes", get_themes),
]);