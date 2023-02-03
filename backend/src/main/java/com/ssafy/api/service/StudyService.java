package com.ssafy.api.service;

import com.ssafy.api.request.study.StudyCreatePostReq;
import com.ssafy.api.request.study.StudyInfoUpdatePutReq;
import com.ssafy.api.response.study.StudyCreatePostRes;
import com.ssafy.api.response.study.StudyRes;
import com.ssafy.db.entity.Study;
import org.springframework.web.multipart.MultipartFile;

/**
 * 스터디 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의
 */
public interface StudyService {

    /**
     * 스터디 생성
     *
     * @param studyCreatePostReq
     * @return StudyCreatePostRes
     */
    StudyCreatePostRes createStudy(StudyCreatePostReq studyCreatePostReq);

    /**
     * 스터디 정보 수정
     *
     * @param studyInfoUpdatePutReq
     * @return StudyRes
     */
    StudyRes updateStudyInfo(Long studyId, StudyInfoUpdatePutReq studyInfoUpdatePutReq);

    /**
     * 스터디 삭제
     *
     * @param studyId
     * @return void
     */
    void deleteStudy(Long studyId);

    boolean validImgFile(MultipartFile multipartFile);

    Study getStudy(Long studyId);

    Study updateStudy(Study study);

}