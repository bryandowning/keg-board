DROP TABLE beers;

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

INSERT INTO
  beers (beername, style, notes, og, fg, srm, ibu, startAmount, amountPoured, remainAmount, tapNumber)
  VALUES ('Cherrywood Smoked Lager', 'Rauchbier', 'Smokey, amber German style of lager', 1.050, 1.017, 14, 22, 5, 0.2, 4.8, 1);

INSERT INTO
  beers (beername, style, tapNumber)
  VALUES ('EMPTY', 'N/A', 2);

INSERT INTO
  beers (beername, style, notes, og, fg, srm, ibu, startAmount, amountPoured, remainAmount, tapNumber)
  VALUES ('Toned-Down Janet\'s Brown', 'American Brown Ale', 'Slightly modified Janet\'s Brown recipe, adapted for liquid malt extract and a less agressive hop schedule', 1.062, 1.012, 19, 31, 5, 1, 4, 3);

INSERT INTO
  beers (beername, style, notes, og, fg, srm, ibu, startAmount, amountPoured, remainAmount, tapNumber)
  VALUES ('Old Rasputin Clone', 'Imperial Stout', 'Inspired by the Old Rasputin recipe, with slightly modified grain bill', 1.096, 1.028, 31, 29, 5, 0.1, 4.9, 4);

INSERT INTO
  beers (beername, style, tapNumber)
  VALUES ('EMPTY', 'N/A', 5);
