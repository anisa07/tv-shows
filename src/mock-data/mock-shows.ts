import type { Cast } from '@/types/cast-type';
import type { Season } from '@/types/season-type';
import type { Show } from '@/types/show-type';

export const shows: Show[] = [
  {
    id: 161,
    url: 'https://www.tvmaze.com/shows/161/dexter',
    name: 'Dexter',
    genres: ['Drama', 'Crime', 'Mystery'],
    status: 'Ended',
    premiered: '2006-10-01',
    ended: '2013-09-22',
    rating: {
      average: 8.4,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/498/1246067.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/498/1246067.jpg',
    },
    summary:
      "<p>He's smart, he's good looking, and he's got a great sense of humor. He's Dexter Morgan, everyone's favorite serial killer. As a Miami forensics expert, he spends his days solving crimes, and nights committing them. But Dexter lives by a strict code of honor that is both his saving grace and lifelong burden. Torn between his deadly compulsion and his desire for true happiness, Dexter is a man in profound conflict with the world and himself.</p>",
  },
  {
    id: 82,
    url: 'https://www.tvmaze.com/shows/82/game-of-thrones',
    name: 'Game of Thrones',
    genres: ['Drama', 'Adventure', 'Fantasy'],
    status: 'Ended',
    premiered: '2011-04-17',
    ended: '2019-05-19',
    rating: {
      average: 8.9,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/498/1245274.jpg',
    },
    summary:
      '<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>',
  },
  {
    id: 50603,
    url: 'https://www.tvmaze.com/shows/50603/peacemaker',
    name: 'Peacemaker',
    genres: ['Comedy', 'Action', 'Science-Fiction'],
    status: 'Running',
    premiered: '2022-01-13',
    ended: null,
    rating: {
      average: 7.8,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/445/1114086.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/445/1114086.jpg',
    },
    summary:
      '<p>The series will explore the origins of the Peacemaker, a man who believes in peace at any cost - no matter how many people he has to kill to get it.</p>',
  },
  {
    id: 63,
    url: 'https://www.tvmaze.com/shows/63/the-vampire-diaries',
    name: 'The Vampire Diaries',
    genres: ['Drama', 'Romance', 'Supernatural'],
    status: 'Ended',
    premiered: '2009-09-10',
    ended: '2017-03-10',
    rating: {
      average: 7.9,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/88/220908.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/88/220908.jpg',
    },
    summary:
      '<p><b>The Vampire Diaries</b> is a supernatural drama/romance based around Elena Gilbert who falls in love with a 163 year old vampire.</p><p>Based on a novel series by L.J. Smith.</p>',
  },
  {
    id: 1704,
    url: 'https://www.tvmaze.com/shows/1704/inhumans',
    name: 'Inhumans',
    genres: ['Science-Fiction'],
    status: 'Ended',
    premiered: '2014-04-23',
    ended: '2014-04-23',
    rating: {
      average: 5.8,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/9/23902.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/9/23902.jpg',
    },
    summary:
      "<p><b>The Inhumans</b> have always been one of Marvel's most enduring oddities. A race of genetic outsiders, they live secluded in their island kingdom of Attilan, preferring not to mix with the outside world. Even stranger, their genetic mutations are self-endowed; each Inhuman, as a coming-of-age ritual, endures exposure to the Terrigen Mists, a strange substance that imparts unearthly powers--some extraordinary, some monstrous. But now the kingdom of Attilan is under attack from without and within. Can the Royal Family, led by Black Bolt, repel the foreign invaders who blast at their outer defenses, as well as the internal threat of Black Bolt's insane brother, Maximus the Mad?</p><p>This popular series takes a classic Marvel cast of characters, and infuses it with a modern sensibility that includes international politics and an awareness of class systems. Dark and grimly compelling, the \"Inhumans\" is one story that won't be forgotten any time soon.</p>",
  },
  {
    id: 52352,
    url: 'https://www.tvmaze.com/shows/52352/secret-invasion',
    name: 'Secret Invasion',
    genres: ['Action', 'Science-Fiction', 'Espionage'],
    status: 'Ended',
    premiered: '2023-06-21',
    ended: '2023-07-26',
    rating: {
      average: 6.4,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/465/1163819.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/465/1163819.jpg',
    },
    summary:
      '<p><b>Secret Invasion </b>showcases a faction of shapeshifting Skrulls who have been infiltrating Earth for years.</p>',
  },
  {
    id: 19,
    url: 'https://www.tvmaze.com/shows/19/supernatural',
    name: 'Supernatural',
    genres: ['Drama', 'Action', 'Supernatural'],
    status: 'Ended',
    premiered: '2005-09-13',
    ended: '2020-11-19',
    rating: {
      average: 8.3,
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/445/1114097.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/445/1114097.jpg',
    },
    summary:
      "<p>This haunting series follows the Winchester brothers as they crisscross the lonely and mysterious back roads of the country in their '67 Chevy Impala, hunting down every evil supernatural force they encounter along the way.</p>",
  },
];

export const seasons: Season[] = [
  {
    id: 719,
    number: 1,
    name: '',
    episodeOrder: 12,
    premiereDate: '2006-10-01',
    endDate: '2006-12-17',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578587.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578587.jpg',
    },
    summary:
      "<p>Dexter and the department hunt a fellow serial killer nicknamed the Ice Truck Killer, whom Dexter discovers to his horror knows his secret identity, and whose grisly work triggers Dexter's suppressed memories of his childhood; Dexter's sister Debra transfers into the Homicide Department; his girlfriend Rita deals with the surprise return of her paroled ex-husband, who doesn't want Dexter around his kids.</p>",
  },
  {
    id: 720,
    number: 2,
    name: '',
    episodeOrder: 12,
    premiereDate: '2007-09-30',
    endDate: '2007-12-16',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578590.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578590.jpg',
    },
    summary:
      '<p>In season two, the bodies of <b>Dexter</b>\'s victims are uncovered and an investigation is launched in Dexter\'s own department to find the killer, dubbed the "Bay Harbor Butcher." Debra struggles to recover, and Rita sends Dexter to Narcotics Anonymous meetings when she suspects that he has an addiction. Sergeant James Doakes, stalks Dexter, suspecting that he is connected with the "Ice Truck Killer" killings.</p>',
  },
  {
    id: 721,
    number: 3,
    name: '',
    episodeOrder: 12,
    premiereDate: '2008-09-28',
    endDate: '2008-12-14',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578594.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578594.jpg',
    },
    summary:
      '<p>After a runin with a man, <b>Dexter </b>initiates a friendship with his brother, Assistant District Attorney Miguel Prado. In the meantime, Rita discovers that she is pregnant, and Debra investigates the murders of a new serial killer, called "The Skinner," hoping to gain a promotion to detective.</p>',
  },
  {
    id: 722,
    number: 4,
    name: '',
    episodeOrder: 12,
    premiereDate: '2009-09-27',
    endDate: '2009-12-13',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578597.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578597.jpg',
    },
    summary:
      '<p><b>Dexter </b>as a father and husband struggles to figure out how to survive for years to come. He seeks to learn from Arthur Mitchell, a serial killer and family man, who has murdered for over thirty years without being discovered.</p>',
  },
  {
    id: 723,
    number: 5,
    name: '',
    episodeOrder: 12,
    premiereDate: '2010-09-26',
    endDate: '2010-12-12',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578598.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578598.jpg',
    },
    summary:
      '<p>In season five, <b>Dexter </b>comes to terms with the aftermath of the Season 4 finale, stopping a group of serial rapists and avoiding a corrupt cop who learns his deadly secret.</p>',
  },
  {
    id: 724,
    number: 6,
    name: '',
    episodeOrder: 12,
    premiereDate: '2011-10-02',
    endDate: '2011-12-18',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578600.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578600.jpg',
    },
    summary:
      "<p>Season six follows <b>Dexter</b>'s and Miami Metro's investigations into a string of bizarre ritualistic killings featuring overtly religious apocalyptic symbolism.</p>",
  },
  {
    id: 725,
    number: 7,
    name: '',
    episodeOrder: 12,
    premiereDate: '2012-09-30',
    endDate: '2012-12-16',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578604.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578604.jpg',
    },
    summary:
      "<p>Season seven follows <b>Dexter's </b>tangles with a Ukrainian mob boss and introduces Hannah McKay, a mysterious widow with a green thumb and a checkered past.</p>",
  },
  {
    id: 726,
    number: 8,
    name: '',
    episodeOrder: 12,
    premiereDate: '2013-06-30',
    endDate: '2013-09-22',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/578606.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/231/578606.jpg',
    },
    summary:
      '<p>The season follows <b>Dexter </b>Morgan, who is forced to deal with his past when he comes across Dr. Evelyn Vogel, an expert on psychiatry who returns to Miami. Nicknamed the "Psychopath Whisperer", she claims to have structured the code for him alongside Harry. This season also deals with a new serial killer in Miami that removes pieces of the victims\' brains, and with Debra who is trying to deal with what she has done in the past season.</p>',
  },
];

export const cast: Cast[] = [
  {
    person: {
      id: 29740,
      name: 'Michael C. Hall',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/10556.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/10556.jpg',
      },
    },
  },
  {
    person: {
      id: 20504,
      name: 'Jennifer Carpenter',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/10557.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/10557.jpg',
      },
    },
  },
  {
    person: {
      id: 1736,
      name: 'David Zayas',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/2/7038.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/2/7038.jpg',
      },
    },
  },
  {
    person: {
      id: 15881,
      name: 'Lauren Vélez',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/135/339593.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/135/339593.jpg',
      },
    },
  },
  {
    person: {
      id: 5299,
      name: 'James Remar',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/157/393379.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/157/393379.jpg',
      },
    },
  },
  {
    person: {
      id: 15577,
      name: 'C.S. Lee',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/10560.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/10560.jpg',
      },
    },
  },
];
