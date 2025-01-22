SELECT D.ID, D.EMAIL, D.FIRST_NAME, D.LAST_NAME
FROM DEVELOPERS D
-- SKILL_CODE의 비트 중에서 256 (Python에 해당하는 코드)을 포함하는지 확인
-- SKILL_CODE의 비트 중에서 1024 (C#에 해당하는 코드)을 포함하는지 확인
WHERE (D.SKILL_CODE & 256 > 0) OR (D.SKILL_CODE & 1024 > 0)
ORDER BY ID ASC; 
