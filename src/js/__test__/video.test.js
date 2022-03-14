/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
/**
 * 테스트 코드에 한하여 max-lines-per-function 규칙과 no-undef 규칙을 비활성화 했습니다.
 */

import Video from '../modules/video';
import { VIDEO_PROPERTIES } from '../constants/video';
import { hasMissingProperty } from '../utils/validation';

describe('비디오 모듈 테스트', () => {
  test('비디오 생성할 수 있다.', () => {
    const givenVideoInput = {
      videoId: '1',
      videoTitle: '빅터의 브이로그',
      channelTitle: '승리자 빅터',
      publishTime: '12:30',
      thumbnail: '1.jpg',
    };
    const video = new Video(givenVideoInput);

    const videoInfo = video.getVideoInfo();
    expect(videoInfo).toEqual(givenVideoInput);
  });

  test('누락된 데이터가 있다면, 비디오 생성할 수 없다.', () => {
    const givenVideoInput = {
      videoId: '1',
      videoTitle: '빅터의 브이로그',
      publishTime: '12:30',
      thumbnail: '1.jpg',
    };

    try {
      Video.create(givenVideoInput);
      expect(true).toBe(false);
    } catch ({ message }) {
      expect(message).toBe('누락된 데이터가 있습니다.');
    }
  });

  test('주어진 비디오 정보에 누락된 property가 있다면, false를 반환해야한다.', () => {
    const givenVideoInfo = {
      videoId: '1',
      videoTitle: '빅터의 브이로그',
      publishTime: '12:30',
      thumbnail: '1.jpg',
    };

    expect(hasMissingProperty(VIDEO_PROPERTIES, givenVideoInfo)).toBeTruthy();
  });
});
