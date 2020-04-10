CREATE TABLE beers (
  id SERIAL PRIMARY KEY,
  beername varchar(255) NOT NULL,
  style varchar(255) NOT NULL,
  notes text NOT NULL DEFAULT '',
  og real NOT NULL DEFAULT '1.0',
  fg real NOT NULL DEFAULT '1.0',
  srm real NOT NULL DEFAULT '1.0',
  ibu real NOT NULL DEFAULT '0.0',
  startAmount real NOT NULL DEFAULT '0.0',
  amountPoured real NOT NULL DEFAULT '0.0',
  remainAmount real NOT NULL DEFAULT '0.0',
  tapNumber int NOT NULL DEFAULT '-1'
);
