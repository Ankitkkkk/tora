use crate::delegator::forward_content::{RequestAttrs, ResponseAttrs};
use crate::util::errors::Result;
use crate::util::builder::response;

use super::repository::get_all_themes;

pub fn get_themes(_request: &RequestAttrs) -> Result<String> {

    response(get_all_themes()?)
    // Ok(serde_json::to_string(&ResponseAttrs{ content: &get_all_themes()?})?)
}