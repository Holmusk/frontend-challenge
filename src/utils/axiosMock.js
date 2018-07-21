import AxiosMockAdapter from 'axios-mock-adapter';

import axios from '@/utils/axios';

import data from '@/utils/data';
import config from '@/config';

const axiosMock = new AxiosMockAdapter(axios);

const dataMock = () => {
  axiosMock
    .onGet(config.dataUri)
    .reply(200, JSON.stringify(data));
};

dataMock();

// All requests except those specified above should work as usual.
axiosMock.onAny().passThrough();

export default axiosMock;
