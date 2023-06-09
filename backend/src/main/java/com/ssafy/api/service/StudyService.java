package com.ssafy.api.service;

import com.ssafy.api.request.study.StudyCreatePostReq;
import com.ssafy.api.request.study.StudyInfoUpdatePutReq;
import com.ssafy.api.response.study.StudyDetailRes;
import com.ssafy.api.response.study.StudyRes;
import com.ssafy.db.entity.Study;
import com.ssafy.db.entity.StudyImg;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * 스터디 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의
 */
public interface StudyService {
    /**
     * 스터디 생성
     */
    StudyRes createStudy(String email, StudyCreatePostReq studyCreatePostReq);

    /**
     * 스터디 참여
     */
    StudyRes joinStudy(String email, Long studyId);

    /**
     * 스터디 가입 여부 확인
     */
    void checkStudyMember(String email, Long studyId);

    /**
     * 스터디 나가기
     */
    void leaveStudy(String email, Long studyId);

    /**
     * 스터디 목록 조회
     */
    List<StudyRes> findByCondition(List<String> skill, Integer generation, String region, Integer classNum, Boolean isPublic);

    /**
     * 스터디 조회
     */
    StudyDetailRes findByStudyId(Long studyId);

    /**
     * 스터디 수정
     */
    StudyRes updateStudyInfo(String email, Long studyId, StudyInfoUpdatePutReq studyInfoUpdatePutReq);

    /**
     * 스터디 삭제
     */
    void deleteStudy(String email, Long studyId);

    /**
     * 이미지 유효성 검사
     */
    boolean validImgFile(MultipartFile multipartFile);

    /**
     * 스터디 조회
     */
    Study getStudy(Long studyId);

    /**
     * 스터디 이미지 수정
     */
    Study updateStudy(Study study);

    /**
     * 스터디 이미지 조회
     */
    StudyImg getImage(Long studyId);

    /**
     * 스터디 이미지 업로드
     */
    StudyImg uploadImage(MultipartFile multipartFile) throws IOException;

    /**
     * 스터디 이미지 수정
     */
    StudyImg updateImage(MultipartFile multipartFile, Study study) throws IOException;

    /**
     * 스터디 이미지 삭제
     */
    void deleteImage(Long studyId);

}
