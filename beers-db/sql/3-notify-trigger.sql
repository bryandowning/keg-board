CREATE TRIGGER notify_beer_changed
  AFTER INSERT OR UPDATE
  ON "beers"
  FOR EACH ROW
  EXECUTE PROCEDURE notify_beer_changed();

CREATE TRIGGER notify_beer_removed
  AFTER DELETE
  ON "beers"
  FOR EACH ROW
  EXECUTE PROCEDURE notify_beer_removed();
