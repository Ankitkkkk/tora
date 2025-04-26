use crate::db::db_selector::DBInterface;


pub struct MysqlDb;

impl DBInterface for MysqlDb {
    fn get() -> String {
        "Hlw Mom!!!"
    }
}
