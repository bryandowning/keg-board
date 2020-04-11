CREATE OR REPLACE FUNCTION notify_beer_changed()
  RETURNS trigger AS
$BODY$
    BEGIN
        PERFORM pg_notify('beer_changed', row_to_json(NEW)::text);
        RETURN NULL;
    END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;

CREATE OR REPLACE FUNCTION notify_beer_removed()
  RETURNS trigger AS
$BODY$
    BEGIN
        PERFORM pg_notify('beer_removed', row_to_json(OLD)::text);
        RETURN NULL;
    END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
