import imgBanner from '../Imagine/images/d01.jpg';

export const mockDataBanner = {
  banner: {
    imageBanner: {
      url: imgBanner,
      percentage: {
        current: 5,
        total: 21,
        percent: 75,
      },
    },
  },
};

export const mockDataMealHistory = [
  {
    date: '2023-05-21',
    meals: {
      morning: {
        id: 1,
        name: 'oatmeal',
        image: '/Imagine/hexZone/m01.jpg',
        url: '',
      },
      lunch: {
        id: 2,
        name: 'sandwich',
        image: '/Imagine/hexZone/I03.jpg',
        url: '',
      },
      dinner: {
        id: 3,
        name: 'chicken',
        image: '/Imagine/hexZone/d01.jpg',
        url: '',
      },
      snack: {
        id: 4,
        name: 'chicken',
        image: '/Imagine/hexZone/I01.jpg',
        url: '',
      },
    },
  },
  {
    date: '2023-05-20',
    meals: {
      morning: {
        id: 5,
        name: 'oatmeal',
        image: '/Imagine/hexZone/column-1.jpg',
        url: '',
      },
      lunch: {
        id: 6,
        name: 'sandwich',
        image: '/Imagine/hexZone/I02.jpg',
        url: '',
      },
      dinner: {
        id: 7,
        name: 'chicken',
        image: '/Imagine/hexZone/d02.jpg',
        url: '',
      },
      snack: {
        id: 8,
        name: 'chicken',
        image: '/Imagine/hexZone/s01.jpg',
        url: '',
      },
    },
  },
  {
    date: '2023-05-19',
    meals: {
      morning: {
        id: 9,
        name: 'oatmeal',
        image: '/Imagine/hexZone/m01.jpg',
        url: '',
      },
      lunch: {
        id: 10,
        name: 'sandwich',
        image: '/Imagine/hexZone/I03.jpg',
        url: '',
      },
      dinner: {
        id: 11,
        name: 'chicken',
        image: '/Imagine/hexZone/d01.jpg',
        url: '',
      },
      snack: {
        id: 12,
        name: 'chicken',
        image: '/Imagine/hexZone/I01.jpg',
        url: '',
      },
    },
  },
  {
    date: '2023-05-18',
    meals: {
      morning: {
        id: 13,
        name: 'oatmeal',
        image: '/Imagine/hexZone/m01.jpg',
        url: '',
      },
      lunch: {
        id: 14,
        name: 'sandwich',
        image: '/Imagine/hexZone/I03.jpg',
        url: '',
      },
      dinner: {
        id: 15,
        name: 'chicken',
        image: '/Imagine/hexZone/d01.jpg',
        url: '',
      },
      snack: {
        id: 16,
        name: 'chicken',
        image: '/Imagine/hexZone/I01.jpg',
        url: '',
      },
    },
  },
];

export const mockMyRecord = {
  chart: {
    year: {
      labels: [
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '5月',
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [1000, 900, 700, 900, 800, 600, 500, 300, 200, 400, 500, 800],
          borderColor: '#FFCC21',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [1000, 800, 800, 600, 650, 500, 450, 300, 250, 100, 80, 10],
          borderColor: '#8FE9D0',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    },
    month: {
      labels: [
        '1日',
        '2日',
        '3日',
        '4日',
        '5日',
        '6日',
        '7日',
        '8日',
        '9日',
        '10日',
        '11日',
        '12日',
        '13日',
        '14日',
        '15日',
        '16日',
        '17日',
        '18日',
        '19日',
        '20日',
        '21日',
        '22日',
        '23日',
        '24日',
        '25日',
        '26日',
        '27日',
        '28日',
        '29日',
        '30日',
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [
            1000, 900, 700, 900, 800, 600, 500, 300, 200, 400, 800, 600, 650,
            500, 450, 300, 250, 100, 80, 10, 1000, 800, 800, 600, 650, 250, 100,
            80, 10, 1000, 800,
          ],
          borderColor: '#FFCC21',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [
            1000, 800, 800, 600, 650, 500, 450, 300, 250, 100, 80, 10, 1000,
            800, 800, 600, 650, 500, 450, 300, 250, 100, 80, 10, 800, 600, 500,
            300, 200, 400, 800, 600,
          ],
          borderColor: '#8FE9D0',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    },
    day: {
      labels: [
        '1時間',
        '2時間',
        '3時間',
        '4時間',
        '5時間',
        '6時間',
        '7時間',
        '8時間',
        '9時間',
        '10時間',
        '11時間',
        '12時間',
        '13時間',
        '14時間',
        '15時間',
        '16時間',
        '17時間',
        '18時間',
        '19時間',
        '20時間',
        '21時間',
        '22時間',
        '23時間',
        '24時間',
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 1000, 900, 700, 900, 800, 600, 500, 0, 0, 0,
            0, 0, 0, 0, 0,
          ],
          borderColor: '#FFCC21',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 1000, 900, 700, 900, 800, 600, 500, 0, 0, 0,
            0, 0, 0, 0, 0,
          ],
          borderColor: '#8FE9D0',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    },
    week: {
      labels: ['1時間', '2時間', '3時間', '4時間', '5時間', '6時間', '7時間'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [1000, 900, 700, 900, 800, 600, 500],
          borderColor: '#FFCC21',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [1000, 800, 800, 600, 650, 500, 450],
          borderColor: '#8FE9D0',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    },
  },
};

export const mockExcercise = {
  record: [
    {
      date: '2021.05.21',
      activities: [
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
      ],
    },
    {
      date: '2021.05.20',
      activities: [
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
        {
          activity: '家事全般（立位・軽い）',
          consume: '26kcal',
          duration: '10 min',
        },
      ],
    },
  ],
};

const diary = [
  {
    date: '2021.05.21',
    time: '23:25',
    text: '私の日記の記録が一部表示されます。<br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
];

export const column = {
  recommendList: [
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-1.jpg',
    },
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-2.jpg',
    },
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-3.jpg',
    },
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-4.jpg',
    },
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-5.jpg',
    },
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-6.jpg',
    },
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-7.jpg',
    },
    {
      date: '2021.05.17',
      time: '23:25',
      text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      supplements: ['魚料理', '和食', 'DHA'],
      image: '/Imagine/images/column-8.jpg',
    },
  ],
};
