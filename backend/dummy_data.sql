-- User dummy data
insert into amorr.users (email_address, address, user_type, full_name, password) values ('efkan@amorr.com', '1 Hacker Way', 'Customer', 'Efkan G', '7acc04a7be9cbb6a1258bfc04f2337b7'); -- password is fa6834fsf6
insert into amorr.users (email_address, address, user_type, full_name, password) values ('mir@amorr.com', '1 Hacker Way', 'Service Provider', 'Mir A', '25d55ad283aa400af464c76d713c07ad'); -- password is 12345678

-- Customer dummy data
insert into amorr.customers (uid, total_rating, num_ratings) values ('2001', '5', '1');
insert into amorr.customers (uid, total_rating, num_ratings) values ('2002', '4.5', '4');
insert into amorr.customers (uid, total_rating, num_ratings) values ('2003', '3', '10');

-- Service provider dummy data
insert into amorr.service_providers (uid, bio, type_of_services) values ('7', 'i am a genius', 'brains');
insert into amorr.service_providers (uid, bio, type_of_services) values ('1004', 'i am a makeup artist', 'makeup');
insert into amorr.service_providers (uid, bio, type_of_services) values ('1005', 'i am a nail expert', 'nails');
insert into amorr.service_providers (uid, bio, type_of_services) values ('1006', 'i am a massist', 'massage');
insert into amorr.service_providers (uid, bio, type_of_services) values ('1007', 'i am a hairstyler', 'hairstyling');

-- Test get-sp-profile
insert into amorr.users (email_address, address, user_type, full_name, password) values ('efkan@amorr.com', '1 Hacker Way', 'Customer', 'Efkan G', '7acc04a7be9cbb6a1258bfc04f2337b7'); -- password is fa6834fsf6
UPDATE amorr.users SET uid = 9999 WHERE email_address = 'efkan@amorr.com';  -- set user id to 9999 for stability
insert into amorr.service_providers (uid, bio, type_of_services) values ('9999', 'i am a genius', 'brains');    -- create entry for test user in service_providers 
insert into amorr.profile_photos (uid, pfp_path) values ('9999', '4.jpg');  -- create entry for test user's profile photo 
insert into amorr.sp_reviews (recipient_uid, reviewer_uid, type_of_service, rating, review) values ('9999', '7', 'brains', '5', 'example review 1');
insert into amorr.sp_reviews (recipient_uid, reviewer_uid, type_of_service, rating, review) values ('9999', '7', 'brains', '4', 'example review 2');
insert into amorr.sp_reviews (recipient_uid, reviewer_uid, type_of_service, rating, review) values ('9999', '7', 'brains', '4', 'example review 3');
insert into amorr.sp_reviews (recipient_uid, reviewer_uid, type_of_service, rating, review) values ('9999', '7', 'brains', '2', 'example review 4');
insert into amorr.sp_reviews (recipient_uid, reviewer_uid, type_of_service, rating, review) values ('9999', '7', 'brains', '4', 'example review 5');