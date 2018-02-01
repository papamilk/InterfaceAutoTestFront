import { environment } from '../environments/environment'

export const URL_PREFIX = `${environment.prefix}`;

export const EXECUTE_TEST_PREFIX = `${URL_PREFIX}executeTest/`;
export const EXECUTE_TEST = `${EXECUTE_TEST_PREFIX}execute`;
export const DB_INIT = `${EXECUTE_TEST_PREFIX}dbInit`;
export const TOTAL_TESTDATA_COUNT = `${EXECUTE_TEST_PREFIX}totalTestDataCount`;
export const EXECUTED_TESTDATA_COUNT = `${EXECUTE_TEST_PREFIX}executedTestDataCount`;
export const EXCEL_PARSE = `${EXECUTE_TEST_PREFIX}parseDataFile`;
export const VALIDATE_EXPECT_RESULT = `${EXECUTE_TEST_PREFIX}validateExpectResult`;

export const DOWNLOAD_PREFIX = `${URL_PREFIX}download/`;
export const EXECUTED_LOG_FILE = `${DOWNLOAD_PREFIX}logFile`;
export const EXCEL_DOWNLOAD = `${DOWNLOAD_PREFIX}resultReport`;
export const EXCEL_DOWNLOAD_TEMPLATE = `${DOWNLOAD_PREFIX}dataTemplate`;
export const TD_DOWNLOAD_DATA_FILE = `${DOWNLOAD_PREFIX}testDataFile`;

export const PROJECT_LIST = `${URL_PREFIX}project/getList`;
export const PROJECT_ONE = `${URL_PREFIX}project/getOne`;
export const PROJECT_ADD = `${URL_PREFIX}project/add`;
export const PROJECT_UPDATE = `${URL_PREFIX}project/update`;
export const PROJECT_CHECK_NAME = `${URL_PREFIX}project/checkName`;

export const MAIN_LIST = `${URL_PREFIX}executeMain/getList`;
export const MAIN_ONE = `${URL_PREFIX}executeMain/getOne`;
export const MAIN_ADD = `${URL_PREFIX}executeMain/add`;
export const MAIN_UPDATE = `${URL_PREFIX}executeMain/update`;
export const MAIN_CHECK_NAME = `${URL_PREFIX}executeMain/checkName`;

export const SUB_LIST = `${URL_PREFIX}executeMainSub/getList`;
export const SUB_ONE = `${URL_PREFIX}executeMainSub/getOne`;
export const SUB_ADD = `${URL_PREFIX}executeMainSub/add`;
export const SUB_UPDATE = `${URL_PREFIX}executeMainSub/update`;
export const SUB_BY_IEMID = `${URL_PREFIX}executeMainSub/getExecuteMainSubByIemId`;
export const SUB_CHECK_NAME = `${URL_PREFIX}executeMainSub/checkName`;

export const TC_LIST = `${URL_PREFIX}testCase/getList`;
export const TC_ONE = `${URL_PREFIX}testCase/getOne`;
export const TC_ADD = `${URL_PREFIX}testCase/add`;
export const TC_UPDATE = `${URL_PREFIX}testCase/update`;
export const TC_BY_MPID = `${URL_PREFIX}testCase/getTestCaseByMpId`;
export const TC_CHECK_NAME = `${URL_PREFIX}testCase/checkName`;

export const SUBTC_LIST = `${URL_PREFIX}executeTestCase/getList`;
export const SUBTC_ONE = `${URL_PREFIX}executeTestCase/getOne`;
export const SUBTC_ADD = `${URL_PREFIX}executeTestCase/add`;
export const SUBTC_UPDATE = `${URL_PREFIX}executeTestCase/update`;

export const URL_LIST = `${URL_PREFIX}url/getList`;
export const URL_ONE = `${URL_PREFIX}url/getOne`;
export const URL_ADD = `${URL_PREFIX}url/add`;
export const URL_UPDATE = `${URL_PREFIX}url/update`;
export const URL_CHECK_NAME = `${URL_PREFIX}url/checkName`;

export const URLTC_LIST = `${URL_PREFIX}urlTestCase/getList`;
export const URLTC_ONE = `${URL_PREFIX}urlTestCase/getOne`;
export const URLTC_ADD = `${URL_PREFIX}urlTestCase/add`;
export const URLTC_UPDATE = `${URL_PREFIX}urlTestCase/update`;

export const TD_LIST = `${URL_PREFIX}testData/getList`;
export const TD_ONE = `${URL_PREFIX}testData/getOne`;
export const TD_ADD = `${URL_PREFIX}testData/add`;
export const TD_UPDATE = `${URL_PREFIX}testData/update`;
export const TD_CHECK_NAME = `${URL_PREFIX}testData/checkName`;
export const TD_LIST_BY_MTCID = `${URL_PREFIX}testData/getListByMtcId`;

export const DEPEND_LIST = `${URL_PREFIX}dataDependency/getList`;
export const DEPEND_ONE = `${URL_PREFIX}dataDependency/getOne`;
export const DEPEND_ADD = `${URL_PREFIX}dataDependency/add`;
export const DEPEND_UPDATE = `${URL_PREFIX}dataDependency/update`;

export const RM_LIST = `${URL_PREFIX}resultMain/getList`;
export const RM_ONE = `${URL_PREFIX}resultMain/getOne`;

export const RS_LIST = `${URL_PREFIX}resultSub/getList`;
export const RS_ONE = `${URL_PREFIX}resultSub/getOne`;

export const RTC_LIST = `${URL_PREFIX}resultTestCase/getList`;
export const RTC_ONE = `${URL_PREFIX}resultTestCase/getOne`;

export const RURL_LIST = `${URL_PREFIX}resultURL/getList`;
export const RURL_ONE = `${URL_PREFIX}resultURL/getOne`;

export const RTD_LIST = `${URL_PREFIX}resultTestData/getList`;
export const RTD_ONE = `${URL_PREFIX}resultTestData/getOne`;
